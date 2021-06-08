import { Component, OnInit } from '@angular/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { Reminder } from "../../../models/reminder.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  reminders: Reminder[] = [
    {
      username: "Patito",
      reason: "Regar planta dos mil novecientas veces para que no se muera",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      username: "Patito",
      reason: "Abonar planta para ver si crece mas que un sapo parado de manos",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      username: "Patito",
      reason: "Podar planta para que quede como joaquin cuando se corta el pelo, con una mera jupa",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      username: "Patito",
      reason: "Correr la planta del sol para que no se queme como mi pobre cerebro en este preciso instante, ayuda por favor",
      day: ["Lunes, Martes"],
      repeat: true
    },
    {
      username: "Patito",
      reason: "La planta quiere mimir como la que está escribiendo esto, que sueño aiuda.",
      day: ["Lunes, Martes"],
      repeat: true
    }
  ];
  today: number = Date.now();

  constructor(
    //private _reminderService: ReminderService
  ) { }

  ngOnInit(): void {
    //this.reminders = this._reminderService.getReminders();
  }

}
