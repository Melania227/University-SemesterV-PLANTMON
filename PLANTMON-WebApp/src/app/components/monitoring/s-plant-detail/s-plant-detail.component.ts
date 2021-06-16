import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DatesData,
  Monitoring,
  SensorData,
} from 'src/app/models/monitoring.model';
import { MonitoringService } from 'src/app/services/monitoring.service';
import { Chart, registerables } from 'node_modules/chart.js';
import * as moment from 'moment';
import { DatabaseService } from 'src/app/services/database.service';
import { dbInfo } from 'src/app/models/database.model';

@Component({
  selector: 'app-s-plant-detail',
  templateUrl: './s-plant-detail.component.html',
  styleUrls: ['./s-plant-detail.component.css'],
})
export class SPlantDetailComponent implements OnInit {
  id: string;
  private sub: any;
  htmlRef: any;
  plant: Monitoring;
  updates: {};
  sensors: string[];
  myChart: Chart;

  /*DATOS*/
  dates: DatesData[] = [];
  p_Humedad: number[] = [];
  p_Temp: number[] = [];
  p_Luz: number[][] = [];
  p_Riego: number[][] = [];
  Humedad: string;
  Temp: string;
  Luz: string;
  Riego: string;
  info: dbInfo;

  constructor(
    private route: ActivatedRoute,
    private _MonitoringService: MonitoringService,
    private _DatabaseInfo: DatabaseService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    let userActual = localStorage.getItem('username');
    this._MonitoringService
      .getPlantByName(userActual, this.id)
      .subscribe(async (res) => {
        this.plant = res;
        this.updates = this.plant.updates;
        this.sensors = this.plant.associatedSensors;
        this.StartChart();
      });
  }

  StartChart(): void {
    var i = 0;
    this.sensors.forEach((sensorId) => {
      this._MonitoringService
        .getPlantsSensorsById(sensorId)
        .subscribe((res) => this.DataFilter(res, sensorId))
        .add(() => {
          i++;
          if (i == this.sensors.length) {
            this._DatabaseInfo
              .getPlantInfoByName(this.plant.type)
              .subscribe(
                async (res) => (this.info = res),
                (error) => (this.info = null)
              )
              .add(() => {
                if (this.info != null) this.DataOrganizer();
                this.CreateChart();
                this.draw('r');
              });
          }
        });
    });
  }

  DataOrganizer() {
    this.sensors.forEach((element) => {
      if (element == 'A') {
        for (let i = 0; i < this.info.temperature.length; i++) {
          this.info.temperature[i] = this.info.temperature[i].replace('°C', '');
        }
      } else if (element == 'B') {
        this.info.moisture = this.info.moisture.replace('%', '');
      }
    });
  }

  DataFilter(arr: SensorData[], actual_type: string): void {
    var firstData = arr[arr.length - 1].data;
    let d_dates: DatesData = {type:"",date:[]};
    let list =[];
    for (let i = 0; i < 3; i++) {
      if (arr.length != 0) {
        let actual_d = moment(new Date(arr[arr.length - 1].date)).format(
          'YYYY/MM/DD'
        );
        list.push(actual_d);
        var ar = arr.filter(
          (x) => moment(new Date(x.date)).format('YYYY/MM/DD') == actual_d
        );
        arr = arr.filter(
          (x) => moment(new Date(x.date)).format('YYYY/MM/DD') != actual_d
        );
        if (actual_type == 'B') {
          this.p_Humedad.push(this.DataAnalyzer(ar));
          this.Humedad = "Humedad: " + firstData;
        } else if (actual_type == 'A') {
          this.p_Temp.push(this.DataAnalyzer(ar));
          this.Temp = "Temperatura: " + firstData;
        } else if (actual_type == 'D') {
          let value: number = this.DataAnalyzer(ar);
          let l: number = ar.length;
          this.p_Riego.push([value, l - value]);
          (firstData == "bajo" ) ? firstData = "Baja" : firstData ="Alta";
          this.Riego = "Necesidad de riego: " +  firstData;
        } else {
          let value: number = this.DataAnalyzer(ar);
          let l: number = ar.length;
          (Number(firstData) <= 500 ) ? firstData = "Alta" : firstData ="Baja";
          this.p_Luz.push([value, l - value]);
          this.Luz = "Intensidad solar: " + firstData;
        }
      }
    }
    d_dates.type = actual_type;
    d_dates.date = list;
    this.dates.push(d_dates);
  }

  DataAnalyzer(list: SensorData[]): number {
    let ident = list[0].sensorIdentifier;
    let promedio: number = 0;
    for (var i = 0; i < list.length; i++) {
      if (ident == 'A' || ident == 'B')
        promedio += Number(list[i].data.replace('°C', ''));
      else {
        if (ident != 'C') list[i].data == 'alto' ? (promedio += 1) : 0;
        else Number(list[i].data.replace('°C', '')) <= 500 ? (promedio += 1) : 0;
      }
    }
    if (ident == 'D' || ident == 'C') {
      return promedio;
    }
    return promedio / i;
  }

  CreateChart(): void {
    this.htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.myChart = new Chart(this.htmlRef, {
      type: 'bar',
      data: {
        labels: ['Dia 1', 'Dia 2', 'Dia 3'],
        datasets: [
          {
            label: "",
            data: [this.p_Temp[0], this.p_Temp[1], this.p_Temp[2]],
            backgroundColor: [
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1,
            barThickness: 25,
          },
        ],
      },
      options: {
        scales: {
          y: {
            grid: {
              color: '#74561e9d',
            },
            ticks: {
              color: 'black',
            },
          },
          x: {
            grid: {
              color: '#74561e9d',
            },
            ticks: {
              color: 'black',
            },
          },
        },
        aspectRatio: 1,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Temperatura',
            color: 'black',
            position: 'bottom',
            font: {
              size: 14,
            },
          },
        },
      },
    } as any);

    this.myChart.render();
  }

  draw(side: string): void {
    this.myChart.data.datasets[0].label ="";
    this.myChart.data.labels = [];
    this.myChart.data.datasets[0].data = [];
    if (this.myChart.data.datasets.length != 1)
      this.myChart.data.datasets.pop();
    side == 'l'
      ? (this.sensors = this.rotateLeft(this.sensors))
      : (this.sensors = this.rotateRight(this.sensors));
    let actual = this.sensors[0];
    if (actual == 'B') {
      
      this.myChart.options.plugins.title.text = 'Humedad promedio de los últimos tres días';
      for (let i = 0; i < this.p_Humedad.length; i++) {
        this.myChart.data.datasets[0].label = "Promedio";
        this.myChart.data.datasets[0].data[i] = this.p_Humedad[i];
        if (this.info != null) {
          let num = Number(this.info.moisture);
          num > 0
            ? num >= this.p_Humedad[i]
              ? (this.myChart.data.datasets[0].borderColor[i] = '#ff0000')
              : (this.myChart.data.datasets[0].borderColor[i] = '#63941e')
            : num * -1 < this.p_Humedad[i]
            ? (this.myChart.data.datasets[0].borderColor[i] = '#ff0000')
            : (this.myChart.data.datasets[0].borderColor[i] = '#63941e');
        }
      }
    } else if (actual == 'A') {
      this.myChart.data.datasets[0].label = "Promedio";
      this.myChart.options.plugins.title.text = 'Temperatura promedio de los últimos tres días';
      for (let i = 0; i < this.p_Temp.length; i++) {
        this.myChart.data.datasets[0].data[i] = this.p_Temp[i];
        if (this.info != null) {
          let num1 = Number(this.info.temperature[0]);
          let num2 = Number(this.info.temperature[1]);
          num2 >= this.p_Temp[i] && this.p_Temp[i] >= num1
            ? (this.myChart.data.datasets[0].borderColor[i] = '#63941e')
            : (this.myChart.data.datasets[0].borderColor[i] = '#ff0000');
        }
      }
    } else if (actual == 'C') {
      this.myChart.data.datasets[0].label = "Alta";
      this.myChart.options.plugins.title.text = 'Intensidad solar registrada en los últimos tres días';
      this.myChart.data.datasets.push({
        label : "Baja",
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
        barThickness: 25,
      });
      for (let i = 0; i < this.p_Luz.length; i++) {
        this.myChart.data.datasets[0].data[i] = this.p_Luz[i][0];
        this.myChart.data.datasets[1].data[i] = this.p_Luz[i][1];
        if (this.info != null) {
          let data: string = this.info.solarIntensity;
          if (data == 'Alta') {
            this.myChart.data.datasets[0].borderColor[i] = '#63941e';
            this.myChart.data.datasets[1].borderColor[i] = '#ff0000';
          } else {
            this.myChart.data.datasets[1].borderColor[i] = '#63941e';
            this.myChart.data.datasets[0].borderColor[i] = '#ff0000';
          }
        }
      }
    } else {
      this.myChart.data.datasets[0].label = "Alta";
      this.myChart.options.plugins.title.text = 'Necesidad de riego registrada en los últimos tres días';
      this.myChart.data.datasets.push({
        label : "Baja",
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
        barThickness: 25,
      });
      //console.log(this.p_Riego); console.log("********************");
      for (let i = 0; i < this.p_Riego.length; i++) {
        this.myChart.data.datasets[0].data[i] = this.p_Riego[i][0];
        this.myChart.data.datasets[1].data[i] = this.p_Riego[i][1];
        if (this.info != null) {
          let data: string = this.info.irrigation;
          if (data == 'Alta') {
            this.myChart.data.datasets[0].borderColor[i] = '#63941e';
            this.myChart.data.datasets[1].borderColor[i] = '#ff0000';
          } else {
            this.myChart.data.datasets[1].borderColor[i] = '#63941e';
            this.myChart.data.datasets[0].borderColor[i] = '#ff0000';
          }
        }
      }
    }
    let arrayDates = this.dates.filter(x => x.type== actual);
    for (let i = 0; i < arrayDates[0].date.length; i++) {
      this.myChart.data.labels[i] = arrayDates[0].date[i];
    }
    this.myChart.update();
  }

  rotateLeft(arr: string[]): string[] {
    let first = arr.pop();
    arr.unshift(first);
    return arr;
  }
  rotateRight(arr: string[]): string[] {
    let first = arr.shift();
    arr.push(first);
    return arr;
  }
}
