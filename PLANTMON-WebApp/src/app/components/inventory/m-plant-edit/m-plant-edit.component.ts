import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory, InventoryToEdit } from '../../../models/inventory.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-m-plant-edit',
  templateUrl: './m-plant-edit.component.html',
  styleUrls: ['./m-plant-edit.component.css'],
})
export class MPlantEditComponent implements OnInit {
  id: string;
  private sub: any;

  updates: [{date: number,
    description: string;}];

  /* PARA EL MODAL */
  closeModal: string;
  actual_d: any;
  actual_des: string;

  original_plant: Inventory;

  constructor(
    private route: ActivatedRoute,
    private _inventoryService: InventoryService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    let userActual = localStorage.getItem('username');
    this._inventoryService
      .getPlantByName(userActual, this.id)
      .subscribe((res) => {
        this.original_plant = res;
        this.updates = this.original_plant.updates;
      });
  }

  triggerModal(content, date: number, descrip: string) {
    this.actual_d = new Date(date.toString());
    this.actual_des = descrip;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
          this.updates.find(x => x.date == date).description = this.actual_des
          console.log(this.updates);
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  guardar(): void { 
    let new_plant: InventoryToEdit;
    new_plant.username = this.original_plant.username;
   
    //this._inventoryService.editInventory(this.original_plant);
  }
}
