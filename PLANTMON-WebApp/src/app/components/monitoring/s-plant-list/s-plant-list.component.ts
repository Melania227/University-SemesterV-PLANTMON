import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Monitoring } from 'src/app/models/monitoring.model';
import { MonitoringService } from 'src/app/services/monitoring.service';

@Component({
  selector: 'app-s-plant-list',
  templateUrl: './s-plant-list.component.html',
  styleUrls: ['./s-plant-list.component.css']
})
export class SPlantListComponent implements OnInit {
 
  plantMonitoring: Monitoring[];
  hayPlants:number;

  constructor(
    private _MonitoringService: MonitoringService, 
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let userActual =  localStorage.getItem('username');
    this._MonitoringService.getMonitoringByUser(userActual).subscribe(res => {
      this.plantMonitoring = res;
      this.hayPlants = res.length;
    });
  }

  deletePlant(plantName: string){
    /* Lo enviamos al servidor de BD */
    let userActual =  localStorage.getItem('username');

    this._MonitoringService.deletePlant(userActual, plantName).subscribe(
        res => {
          this.toastr.success('La planta ha sido eliminada del monitoreo con éxito', '¡Planta elimada!');
          setTimeout(function(){ window.location.reload(); }, 2000);
        },
        err => this.toastr.error('La planta no pudo ser eliminada del monitoreo, intente nuevamente', 'ERROR')
      )

    /* this.popNotificationService.success("User successfully created");*/
  }

}