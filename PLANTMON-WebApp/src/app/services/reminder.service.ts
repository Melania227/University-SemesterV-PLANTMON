import { Injectable } from '@angular/core';
import { Reminder } from "../models/reminder.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  remindersTemp: Reminder[];

  private URL: string = 'http://localhost:80/';
  //private URL: string = 'http://192.168.100.19:80/';

  constructor(private http: HttpClient){
  }

  /* Delete */
  deleteReminder(username: string, reason: string){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
          username: username,
          reason: reason
      },
    };
    return this.http.delete<any>(this.URL+'reminders/', options);
  }

  /* Getters */
  getRemindersByUser(user: string): Observable<Reminder[]>{
    console.log(this.URL+'reminders/:'+user);
    return this.http.get<Reminder[]>(this.URL+'reminders/'+user);
  }

  /* Create  */
  newReminder(reminder:Reminder){
    return this.http.post<any>(this.URL+'reminders/', reminder);
  }


}
