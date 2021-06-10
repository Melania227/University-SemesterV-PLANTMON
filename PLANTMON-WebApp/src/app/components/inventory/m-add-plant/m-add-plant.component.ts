import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory, InventoryToEdit } from "../../../models/inventory.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-add-plant',
  templateUrl: './m-add-plant.component.html',
  styleUrls: ['./m-add-plant.component.css']
})
export class MAddPlantComponent implements OnInit {
  nombrePlanta: string ="";
  familiaPlanta: string ="";
  actualizacionPlanta: string ="";
  newPlant: Inventory;
  fecha: number = Date.now();

  constructor(
    private _inventoryService: InventoryService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendData(plantForm){
    this.nombrePlanta=plantForm.form.value.nombrePlanta;
    this.familiaPlanta=plantForm.form.value.familiaPlanta;
    this.actualizacionPlanta=plantForm.form.value.descripcion;
    console.log(this.nombrePlanta);
    console.log(this.familiaPlanta);
    console.log(this.actualizacionPlanta);

     /* Lo enviamos al servidor de BD */
     let userActual =  localStorage.getItem('username');
     this.newPlant = {username: userActual, plantName: this.nombrePlanta, type: this.familiaPlanta, updates: [{date: this.fecha, description: this.actualizacionPlanta}]};
 
     this._inventoryService.newReminder(this.newPlant).subscribe(
         res => {
           console.log(res);
         },
         err => console.log(err)
     )
 
     /* this.popNotificationService.success("User successfully created");*/
     this.router.navigate(['/inventory/', 'list']); 
  }

}
