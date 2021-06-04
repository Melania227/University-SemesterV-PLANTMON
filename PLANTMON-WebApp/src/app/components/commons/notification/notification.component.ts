import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  today: number = Date.now();
  records=[
    {
      reason: "Regar planta dos mil novecientas veces para que no se muera",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      reason: "Abonar planta para ver si crece mas que un sapo parado de manos",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      reason: "Podar planta para que quede como joaquin cuando se corta el pelo, con una mera jupa",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      reason: "Correr la planta del sol para que no se queme como mi pobre cerebro en este preciso instante, ayuda por favor",
      day: ["Lunes, Martes"],
      repeat: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
