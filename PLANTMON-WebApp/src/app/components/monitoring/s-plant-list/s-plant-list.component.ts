import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monitoring } from 'src/app/models/monitoring.model';
import { MonitoringService } from 'src/app/services/monitoring.service';

@Component({
  selector: 'app-s-plant-list',
  templateUrl: './s-plant-list.component.html',
  styleUrls: ['./s-plant-list.component.css']
})
export class SPlantListComponent implements OnInit {
 
  plantMonitoring: Monitoring[];

  constructor(
    private _MonitoringService: MonitoringService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    let userActual =  localStorage.getItem('username');
    this._MonitoringService.getMonitoringByUser(userActual).subscribe(res => {
      this.plantMonitoring = res;
    });
  }

  deletePlant(plantName: string){
    /* Lo enviamos al servidor de BD */
    let userActual =  localStorage.getItem('username');

    this._MonitoringService.deletePlant(userActual, plantName).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
    )

    /* this.popNotificationService.success("User successfully created");*/
    window.location.reload();
  }

}