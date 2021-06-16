import { Component, OnInit } from '@angular/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { Reminder } from "../../../models/reminder.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  reminders: Reminder[];
  today: number = Date.now();
  hayReminders:number;

  constructor(
    private _reminderService: ReminderService
  ) { }

  ngOnInit(): void {
    //this.reminders = this._reminderService.getRemindersByUser("Patito");
    let userActual =  localStorage.getItem('username');
    console.log(userActual);
    this._reminderService.getRemindersByUser(userActual).subscribe(res => {
      console.log(res);
      this.reminders = res;
      this.hayReminders = res.length;
    });
  }

  deleteReminder(reminder: string){
      /* Lo enviamos al servidor de BD */
    let userActual =  localStorage.getItem('username');

    this._reminderService.deleteReminder(userActual, reminder).subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
    )

    /* this.popNotificationService.success("User successfully created");*/
    window.location.reload();
  }

}
