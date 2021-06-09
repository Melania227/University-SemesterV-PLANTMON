import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory, InventoryToEdit } from "../../models/inventory.model";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  plantInventory: Inventory[];

  constructor(
    private _inventoryService: InventoryService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    let userActual =  localStorage.getItem('username');
    this._inventoryService.getInventoryByUser(userActual).subscribe(res => {
      console.log(res);
      this.plantInventory = res;
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
