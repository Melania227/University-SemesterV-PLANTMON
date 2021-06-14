import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory, InventoryToEdit } from '../../../models/inventory.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-m-plant-edit',
  templateUrl: './m-plant-edit.component.html',
  styleUrls: ['./m-plant-edit.component.css'],
})
export class MPlantEditComponent implements OnInit {
  id: string;
  private sub: any;

  /* PARA EL MODAL */
  closeModal: string;
  actual_d: any;
  actual_des: string;

  original_plant: Inventory;  
  new_plant: InventoryToEdit ;
  new_update: string = "";
  updates: [{date: number,
    description: string;}];

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
      .subscribe(res => {
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
          this.updates.find(x => x.date == date).description = this.actual_des;
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
    let name = this.original_plant.plantName;
    this.original_plant.plantName = this.id;
    if (this.new_update!="") this.updates.push({date:  Date.now(),description: this.new_update});
    this.original_plant.updates = this.updates;
    this.new_plant ={ username: this.original_plant.username,plantName: name, plantaManual:this.original_plant }
    console.log(this.new_plant);
    try {this._inventoryService.editInventory(this.new_plant)} catch(e){console.log(e)};
    console.log("wou");
  }

  deletePlant( date: number ,  descrip: string ):void{
    this.updates = this.updates.filter(x => x.date != date && x.description != descrip ) as [{date: number,
      description: string;}];
    
  }
}
