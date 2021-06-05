import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  plants=[
    {
      "username": "melania227",
        "plantName": "Echeveria",
        "type": "Crassulaceae",
        "updates": [
          {
              "date": "10/05/2021",
              "description": "Compra de la planta Echeveria, es pequeña."
          },
          {
              "date": "11/05/2021",
              "description": "Según los sensores una alerta me informa que la intesidad solar es muy alta para la planta, por lo cual procedo a moverla."
          },
          {
              "date": "12/05/2021",
              "description": "Los sensores me indican que la nueva localización es un mejor lugar para la planta, muestran medidas perfectas."
          }
        ],
        "associatedSensors": ["A", "B", "C", "D"],
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "username": "melania227",
        "plantName": "Echeveria2",
        "type": "Crassulaceae",
        "updates": [
          {
              "date": "10/05/2021",
              "description": "Compra de la planta Echeveria, es pequeña."
          },
          {
              "date": "11/05/2021",
              "description": "Según los sensores una alerta me informa que la intesidad solar es muy alta para la planta, por lo cual procedo a moverla."
          },
          {
              "date": "12/05/2021",
              "description": "Los sensores me indican que la nueva localización es un mejor lugar para la planta, muestran medidas perfectas."
          }
        ],
        "associatedSensors": ["A", "B", "C", "D"],
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "username": "melania227",
        "plantName": "Echeveria3",
        "type": "Crassulaceae",
        "updates": [
          {
              "date": "10/05/2021",
              "description": "Compra de la planta Echeveria, es pequeña."
          },
          {
              "date": "11/05/2021",
              "description": "Según los sensores una alerta me informa que la intesidad solar es muy alta para la planta, por lo cual procedo a moverla."
          },
          {
              "date": "12/05/2021",
              "description": "Los sensores me indican que la nueva localización es un mejor lugar para la planta, muestran medidas perfectas."
          }
        ],
        "associatedSensors": ["A", "B", "C", "D"],
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "username": "melania227",
        "plantName": "Echeveria4",
        "type": "Crassulaceae",
        "updates": [
          {
              "date": "10/05/2021",
              "description": "Compra de la planta Echeveria, es pequeña."
          },
          {
              "date": "11/05/2021",
              "description": "Según los sensores una alerta me informa que la intesidad solar es muy alta para la planta, por lo cual procedo a moverla."
          },
          {
              "date": "12/05/2021",
              "description": "Los sensores me indican que la nueva localización es un mejor lugar para la planta, muestran medidas perfectas."
          }
        ],
        "associatedSensors": ["A", "B", "C", "D"],
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "username": "melania227",
        "plantName": "Echeveria5",
        "type": "Crassulaceae",
        "updates": [
          {
              "date": "10/05/2021",
              "description": "Compra de la planta Echeveria, es pequeña."
          },
          {
              "date": "11/05/2021",
              "description": "Según los sensores una alerta me informa que la intesidad solar es muy alta para la planta, por lo cual procedo a moverla."
          },
          {
              "date": "12/05/2021",
              "description": "Los sensores me indican que la nueva localización es un mejor lugar para la planta, muestran medidas perfectas."
          }
        ],
        "associatedSensors": ["A", "B", "C", "D"],
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
