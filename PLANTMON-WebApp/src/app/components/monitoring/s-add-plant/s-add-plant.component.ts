import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Monitoring } from 'src/app/models/monitoring.model';
import { MonitoringService } from 'src/app/services/monitoring.service';

@Component({
  selector: 'app-s-add-plant',
  templateUrl: './s-add-plant.component.html',
  styleUrls: ['./s-add-plant.component.css']
})
export class SAddPlantComponent implements OnInit {
  nombrePlanta: string ="";
  familiaPlanta: string ="";
  actualizacionPlanta: string ="";
  sensores : string[] = [];
  newPlant: Monitoring;
  fecha: number = Date.now();

  constructor(
    private router: Router,
    private _MonitoringService: MonitoringService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  sendData(plantForm){
    this.nombrePlanta=plantForm.form.value.nombrePlanta;
    this.familiaPlanta=plantForm.form.value.familiaPlanta;
    this.actualizacionPlanta=plantForm.form.value.descripcion;

    plantForm.form.value.sensor1 === true ? this.sensores.push("A") : "" ;
    plantForm.form.value.sensor2 === true ? this.sensores.push("B") : "" ;
    plantForm.form.value.sensor3 === true ? this.sensores.push("C") : "" ;
    plantForm.form.value.sensor4 === true ? this.sensores.push("D") : "" ;

    
     /* Lo enviamos al servidor de BD */
     let userActual =  localStorage.getItem('username');
     this.newPlant = {username: userActual, plantName: this.nombrePlanta, type: this.familiaPlanta, updates: [{date: this.fecha, description: this.actualizacionPlanta}], associatedSensors: this.sensores};
 
     this._MonitoringService.newMonitoringPlant(this.newPlant).subscribe(
         res => {
          this.router.navigate(['/monitoring/', 'list']);  
          this.toastr.success('La planta ha sido añadida al monitoreo con éxito', '¡Planta añadida!');
        },
        err => this.toastr.error('La planta no pudo ser añadida al monitoreo, favor revisar los datos ingresados', 'ERROR')
      )
  }

}
