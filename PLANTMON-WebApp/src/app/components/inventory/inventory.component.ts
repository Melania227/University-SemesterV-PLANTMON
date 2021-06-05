import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  plantInventory=[
    {
      "username": "melania227",
      "plantName": "Echeveria",
      "type": "Crassulaceae",
      "updates": [
        {
            "date": Date.now(),
            "description": "Compra de la planta Echeveria, es pequeña."
        },
        {
            "date": Date.now(),
            "description": "Movimiento de planta, se comenzó a secar."
        },
        {
            "date": Date.now(),
            "description": "Compra de la planta Echeveria, es pequeña."
        }
      ],
      "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "username": "melania227",
      "plantName": "Suculenta",
      "type": "Crassulaceae",
      "updates": [
        {
            "date": Date.now(),
            "description": "Compra de la planta Echeveria, es pequeña."
        },
        {
            "date": Date.now(),
            "description": "Movimiento de planta, se comenzó a secar."
        },
        {
            "date": Date.now(),
            "description": "Movimiento de planta, se comenzó a secar."
        }
      ],
      "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "username": "melania227",
      "plantName": "Cactus",
      "type": "Crassulaceae",
      "updates": [
        {
            "date": Date.now(),
            "description": "Compra de la planta Echeveria, es pequeña."
        },
        {
            "date": Date.now(),
            "description": "Movimiento de planta, se comenzó a secar."
        },
        {
            "date": Date.now(),
            "description": "Planta presenta mejoras en la nueva localización."
        }
      ],
      "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
