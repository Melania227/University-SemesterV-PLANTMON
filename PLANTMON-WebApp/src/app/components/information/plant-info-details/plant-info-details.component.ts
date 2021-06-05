import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-plant-info-details',
  templateUrl: './plant-info-details.component.html',
  styleUrls: ['./plant-info-details.component.css']
})
export class PlantInfoDetailsComponent implements OnInit {
  id: string;
  private sub: any;
  info=[
    {
      "name": "Echeveria",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "name": "Echeveria2",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "name": "Echeveria3",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "name": "Echeveria4",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "name": "Echeveria5",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "name": "Echeveria6",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    },
    {
      "name": "Echeveria7",
        "family": "Crassulaceae",
        "background": [
          "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
          "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
          "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
          "Son plantas para exterior."
        ],
        "tips": [
          "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
          "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
          "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
          "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
        ],
        "temperature": "21⁰C-27⁰C",
        "moisture": "40-50%",
        "pressure": "101 kPa",
        "solarIntensity": "1000 W/m-2",
        "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
    }
  ];
  plantInfo={
    "name": "Echeveria",
      "family": "Crassulaceae",
      "background": [
        "La echeveria en un género de plantas crasas que conforman la familia Crassulaceae.", 
        "Existen aproximadamente 400 especies distintas, distribuidas por el continente americano y originarias (la mayoría) de México.", 
        "Por lo general, estas plantas suculentas no están provistas de tallo, en realidad, crecen formando una roseta.",
        "Son plantas para exterior."
      ],
      "tips": [
        "Las echeverias van a necesitar que las ubiques en un espacio muy iluminado con algún periodo diario de luz solar directa (si reciben mucho sol pueden quemarse).", 
        "Es preferible cultivarlas en, por ejemplo, una ventana exterior o balcón con cierta protección del sol, del viento y de las lluvias.", 
        "Aunque puede resistir temperaturas bajo cero, lo aconsejable es que la resguardes en el interior de casa en caso de temperaturas muy frías.",
        "Lo más recomendable es que la riegues solo cuando la superficie de la tierra esté completamente seca."
      ],
      "temperature": "21⁰C-27⁰C",
      "moisture": "40-50%",
      "pressure": "101 kPa",
      "solarIntensity": "1000 W/m-2",
      "image": "https://drive.google.com/file/d/1hXbScueteO_Vky0fdFF3iopHdZAW9TP8/view?usp=sharing"
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];

       // In a real app: dispatch action to load the details here.
    });
  }

}
