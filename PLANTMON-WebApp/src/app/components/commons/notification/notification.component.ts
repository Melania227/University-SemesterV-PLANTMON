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

  constructor(
    private _reminderService: ReminderService
  ) { }

  ngOnInit(): void {
    //this.reminders = this._reminderService.getRemindersByUser("Patito");
    this._reminderService.getRemindersByUser("Patito").subscribe(res => {
      this.reminders = res;
    });
  }

}
