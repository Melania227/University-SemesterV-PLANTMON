import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-add-plant',
  templateUrl: './s-add-plant.component.html',
  styleUrls: ['./s-add-plant.component.css']
})
export class SAddPlantComponent implements OnInit {
  nombrePlanta: string ="";
  familiaPlanta: string ="";
  actualizacionPlanta: string ="";
  sensoresElegidos=[false,false,false,false];

  constructor() { }

  ngOnInit(): void {
  }

  sendData(plantForm){
    this.nombrePlanta=plantForm.form.value.nombrePlanta;
    this.familiaPlanta=plantForm.form.value.familiaPlanta;
    this.actualizacionPlanta=plantForm.form.value.descripcion;
    this.sensoresElegidos[0]=plantForm.form.value.sensor1===true;
    this.sensoresElegidos[1]=plantForm.form.value.sensor2===true;
    this.sensoresElegidos[2]=plantForm.form.value.sensor3===true;
    this.sensoresElegidos[3]=plantForm.form.value.sensor4===true;
    console.log(this.nombrePlanta);
    console.log(this.familiaPlanta);
    console.log(this.actualizacionPlanta);
    console.log(this.sensoresElegidos);
  }

}
