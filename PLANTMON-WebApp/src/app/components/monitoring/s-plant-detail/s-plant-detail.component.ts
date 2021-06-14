import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monitoring, SensorData } from 'src/app/models/monitoring.model';
import { MonitoringService } from 'src/app/services/monitoring.service';
import { Chart, registerables } from 'node_modules/chart.js';
import * as moment from 'moment';

@Component({
  selector: 'app-s-plant-detail',
  templateUrl: './s-plant-detail.component.html',
  styleUrls: ['./s-plant-detail.component.css']
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
  p_Humedad: number[] = [];
  p_Temp: number[] = [];
  p_Luz: number[] = [];
  p_Riego: number[] = [];
  Humedad: string;
  Temp: string;
  Luz: string;
  Riego: string;

  constructor(private route: ActivatedRoute,
    private _MonitoringService: MonitoringService,
    private router: Router, private elementRef: ElementRef
  ) 
  { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    let userActual = localStorage.getItem('username');
    this._MonitoringService.getPlantByName(userActual, this.id).subscribe(async res => {
      this.plant = res;
      this.updates = this.plant.updates;
      this.sensors = this.plant.associatedSensors;
       this.startChart();
      
    });
    
  }

  startChart(): void {
     this.sensors.forEach(sensorId => {
      let actual_list :SensorData[];
      this._MonitoringService.getPlantsSensorsById(sensorId).subscribe(x => actual_list = x);
      console.log(actual_list);
    });
    return;
  }

  analizeData(list: SensorData[]): number {
    let ident = list[0].sensorIdentifier;
    let promedio: number = 0;
    for (var i = 0; i < list.length; i++) {
      promedio += (ident != "D") ?
        promedio += Number(list[i].data.replace("°C",""))
      :
        promedio += list[i].data == "bajo" ? 1 : 0;
    }
    if(ident == "D"){
      promedio = i/2 > promedio ? 0 : 1;
      return promedio;
    }
    return promedio/i;
  }

  chartit(): void {
    this.htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.myChart = new Chart(this.htmlRef, {
      type: 'bar',
      data: {
        labels: ['Dia 1', 'Dia 2', 'Dia 3'],
        datasets: [{
          label: 'Meta',
          data: [this.p_Humedad[0],this.p_Humedad[1],this.p_Humedad[2]],
          backgroundColor: 'rgba(255, 159, 64, 1)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,

        }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: true,
            labels: {
              color: 'black',
              font: {
                size: 14
              }
            }
          }
        }
      }
    } as any);
    this.myChart.render();
  }
  



}


