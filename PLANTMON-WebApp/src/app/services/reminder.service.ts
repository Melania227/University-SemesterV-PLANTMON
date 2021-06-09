import { Injectable } from '@angular/core';
import { Reminder } from "../models/reminder.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  remindersTemp: Reminder[];

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
