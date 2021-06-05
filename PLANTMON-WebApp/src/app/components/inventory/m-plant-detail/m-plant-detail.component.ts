import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-plant-detail',
  templateUrl: './m-plant-detail.component.html',
  styleUrls: ['./m-plant-detail.component.css']
})
export class MPlantDetailComponent implements OnInit {
  plant={
      "username": "melania227",
      "plantName": "Echeveria",
      "type": "Crassulaceae",
      "updates": [
        {
            "date": Date.now(),
            "description": "Compra de la planta Echeveria, es pequeña, no como el gran velvet chimichanga."
        },
        {
            "date": Date.now(),
            "description": "Movimiento de planta, se comenzó a secar, por mamapichas."
        },
        {
            "date": Date.now(),
            "description": "Quiero irme a acostar 3 años seguidos, solo eso pido alv, estoy harta, woooooooooooooooooooo."
        }
      ],
      "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
  }
  updates=this.plant.updates;
  constructor() { }

  ngOnInit(): void {
  }

}
