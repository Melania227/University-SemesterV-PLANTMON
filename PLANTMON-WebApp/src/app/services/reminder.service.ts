import { Injectable } from '@angular/core';
import { Reminder } from "../models/reminder.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  remindersTemp: Reminder[] = [
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

  private URL: string = 'http://localhost:4000/';

  constructor(private http: HttpClient){
  }

  /* Getters */
  getReminders(): Reminder[]{
    return this.remindersTemp;
  }

  getRemindersByUser(user: string): Observable<Reminder[]>{
    console.log(this.URL+'reminders/:'+user);
    return this.http.get<Reminder[]>(this.URL+'reminders/'+user);
  }

  /* Create  */
  newReminder(reminder:Reminder){
    return this.http.post<any>(this.URL+'reminders/', reminder);
  }


}
