import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory, InventoryToEdit } from "../../../models/inventory.model";

@Component({
  selector: 'app-m-plant-list',
  templateUrl: './m-plant-list.component.html',
  styleUrls: ['./m-plant-list.component.css']
})
export class MPlantListComponent implements OnInit {
  plantInventory: Inventory[];
  hayPlants:number;

  constructor(
    private _inventoryService: InventoryService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    let userActual =  localStorage.getItem('username');
    this._inventoryService.getInventoryByUser(userActual).subscribe(res => {
      this.plantInventory = res;
      this.hayPlants = res.length;
    });
  }

  deletePlant(plantName: string){
    /* Lo enviamos al servidor de BD */
    let userActual =  localStorage.getItem('username');

    this._inventoryService.deletePlant(userActual, plantName).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
    )

    /* this.popNotificationService.success("User successfully created");*/
    window.location.reload();
  }

}
