import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ReminderService } from 'src/app/services/reminder.service';
import { Reminder } from '../../../models/reminder.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],

})
export class NotificationComponent implements OnInit {
  reminders: Reminder[];
  today: number = Date.now();
  hayReminders: number;
  days: string[] = [];
  data: { day: string; reminders: Reminder[] }[] = [];
  @Input() check: boolean = false;

  constructor(
    private _reminderService: ReminderService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    //this.reminders = this._reminderService.getRemindersByUser("Patito");
    let userActual = localStorage.getItem('username');
    moment.locale('es');
    if (this.check) {
      let day_ = moment().add(0, 'days').format('dddd, D [de] MMMM');
      day_ = day_.charAt(0).toUpperCase() + day_.slice(1);
      this.days.push(day_);
    }
    else {
      for (let i = 0; i <= 6; i++) {
        let day_ = moment().add(i, 'days').format('dddd, D [de] MMMM');
        day_ = day_.charAt(0).toUpperCase() + day_.slice(1);
        this.days.push(day_);
      }
    }

      this._reminderService.getRemindersByUser(userActual).subscribe((res) => {
        this.reminders = res;
        this.orginizeReminders();
      });
      console.log(this.check);
    }

    orginizeReminders() {
      this.days.forEach((day) => {
        let list = [];
        this.reminders.forEach((reminder) => {
          let d_ = day.substr(0, day.indexOf(','));
          if (reminder.day.includes(d_)) {
            list.push(reminder);
          }
        });
        this.check ? this.hayReminders = list.length : this.hayReminders = this.reminders.length;
        if (list.length != 0) this.data.push({ day: day, reminders: list });
      });
      console.log(this.hayReminders);
    }

    deleteReminder(reminder: string) {
      /* Lo enviamos al servidor de BD */
      let userActual = localStorage.getItem('username');

      this._reminderService.deleteReminder(userActual, reminder).subscribe(
        (res) => {
          this.toastr.success(
            'El recordatorio ha sido eliminado con éxito',
            'Recordatorio elimado!'
          );
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        },
        (err) =>
          this.toastr.error(
            'El recordatorio no pudo ser eliminado, intente nuevamente',
            'ERROR'
          )
      );
    }
  }
