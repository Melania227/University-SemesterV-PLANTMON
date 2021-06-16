import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory, InventoryToEdit } from "../../../models/inventory.model";

@Component({
  selector: 'app-m-plant-detail',
  templateUrl: './m-plant-detail.component.html',
  styleUrls: ['./m-plant-detail.component.css']
})
export class MPlantDetailComponent implements OnInit {
  id: string;
  private sub: any;

  plant:Inventory;
  updates:{};

  constructor(private route: ActivatedRoute,
    private _inventoryService: InventoryService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });

   let userActual =  localStorage.getItem('username');
    this._inventoryService.getPlantByName(userActual, this.id).subscribe(res => {
      console.log(res);
      this.plant = res;
      this.updates = this.plant.updates;
    });

  }



}
