import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monitoring, SensorData } from 'src/app/models/monitoring.model';
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
  actual_in_chart_: string;
  p_Humedad: number[] = [];
  p_Temp: number[] = [];
  p_Luz: number[] = [];
  p_Riego: number[] = [];
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
        this.startChart();
      });
  }

  startChart(): void {
    var i = 0;
    this.sensors.forEach((sensorId) => {
      this._MonitoringService
        .getPlantsSensorsById(sensorId)
        .subscribe((res) => this.filterData(res, sensorId))
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
                if (this.info != null) this.prepareData();
                this.chartit();
                this.draw('r');
              });
          }
        });
    });
  }

  prepareData() {
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

  filterData(arr: SensorData[], actual_type: string): void {
    var firstData = arr[arr.length - 1].data;
    for (let i = 0; i < 3; i++) {
      if (arr.length != 0) {
        let actual_d = moment(new Date(arr[arr.length - 1].date)).format(
          'YYYY/MM/DD'
        );
        let ar = arr.filter(
          (x) => moment(new Date(x.date)).format('YYYY/MM/DD') == actual_d
        );
        arr = arr.filter(
          (x) => moment(new Date(x.date)).format('YYYY/MM/DD') != actual_d
        );
        if (actual_type == 'B') {
          this.p_Humedad.push(this.analizeData(ar));
          this.Humedad = firstData;
        } else if (actual_type == 'A') {
          this.p_Temp.push(this.analizeData(ar));
          this.Temp = firstData;
        } else if (actual_type == 'D') {
          this.p_Riego.push(this.analizeData(ar));
          this.Riego = firstData;
        } else {
          this.p_Luz.push(this.analizeData(ar));
          this.Luz = firstData;
        }
      }
    }
  }

  analizeData(list: SensorData[]): number {
    let ident = list[0].sensorIdentifier;
    let promedio: number = 0;
    for (var i = 0; i < list.length; i++) {
      if (ident==='A' || ident==='B')
        (promedio += Number(list[i].data.replace('°C', '')))
      else {
        ident!= 'C' ? (promedio += list[i].data == 'bajo' ? 1 : 0) : Number(list[i].data) < 500 ? 1 : 0;
      }
    }
    if (ident == 'D') {
      promedio = i / 2 > promedio ? 0 : 1;
      return promedio;
    }
    return promedio / i;
  }

  chartit(): void {
    this.htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.myChart = new Chart(this.htmlRef, {
      type: 'bar',
      data: {
        labels: ['Dia 1', 'Dia 2', 'Dia 3'],
        datasets: [
          {
            data: [this.p_Temp[0], this.p_Temp[1], this.p_Temp[2]],
            backgroundColor: [
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.5)',
            ],
            borderColor: [
              'rgba(255, 255, 255 1)',
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
    side == 'l'
      ? (this.sensors = this.rotateLeft(this.sensors))
      : (this.sensors = this.rotateRight(this.sensors));
    let actual = this.sensors[0];

    if (actual == 'B') {
      this.myChart.options.plugins.title.text = 'Humedad';
      for (let i = 0; i < this.p_Humedad.length; i++) {
        this.myChart.data.datasets[0].data[i] = this.p_Humedad[i];
        if (this.info != null) {
          let num = Number(this.info.moisture);
          num > 0
            ? num > this.p_Humedad[i]
              ? (this.myChart.data.datasets[0].borderColor[i] = '#ff0000')
              : (this.myChart.data.datasets[0].borderColor[i] = '#63941e')
            : num * -1 > this.p_Humedad[i]
            ? (this.myChart.data.datasets[0].borderColor[i] = '#ff0000')
            : (this.myChart.data.datasets[0].borderColor[i] = '#63941e');
        }
      }
    } else if (actual == 'A') {
      this.myChart.options.plugins.title.text = 'Temperatura';
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
      this.myChart.options.plugins.title.text = 'Intensidad Solar';
      for (let i = 0; i < this.p_Luz.length; i++) {
        this.myChart.data.datasets[0].data[i] = this.p_Luz[i];
        
      }
    } else {
      this.myChart.options.plugins.title.text = 'Riego';
      console.log('riego');
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
