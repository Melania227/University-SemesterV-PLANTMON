import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-add-plant',
  templateUrl: './m-add-plant.component.html',
  styleUrls: ['./m-add-plant.component.css']
})
export class MAddPlantComponent implements OnInit {
  nombrePlanta: string ="";
  familiaPlanta: string ="";
  actualizacionPlanta: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  sendData(plantForm){
    this.nombrePlanta=plantForm.form.value.nombrePlanta;
    this.familiaPlanta=plantForm.form.value.familiaPlanta;
    this.actualizacionPlanta=plantForm.form.value.descripcion;
    console.log(this.nombrePlanta);
    console.log(this.familiaPlanta);
    console.log(this.actualizacionPlanta);
  }

}
