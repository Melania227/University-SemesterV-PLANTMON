import { Component, OnInit } from '@angular/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { Reminder } from "../../../models/reminder.model";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css']
})
export class CreateReminderComponent implements OnInit {
  motivo: string ="";
  diasElegidos: string[] = [];
  repetir=false;
  newReminder:Reminder;

  constructor(
    private _reminderService: ReminderService, 
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    
  }

  sendData(plantForm){
    /* Guardo data */
    this.motivo=plantForm.form.value.motivo;
    this.repetir=plantForm.form.value.repeat===true;
    plantForm.form.value.lunesOpt===true?this.diasElegidos.push("Lunes"):this.diasElegidos;
    plantForm.form.value.martesOpt===true?this.diasElegidos.push("Martes"):this.diasElegidos;
    plantForm.form.value.miercolesOpt===true?this.diasElegidos.push("Miércoles"):this.diasElegidos;
    plantForm.form.value.juevesOpt===true?this.diasElegidos.push("Jueves"):this.diasElegidos;
    plantForm.form.value.viernesOpt===true?this.diasElegidos.push("Viernes"):this.diasElegidos;
    plantForm.form.value.sabadoOpt===true?this.diasElegidos.push("Sábado"):this.diasElegidos;
    plantForm.form.value.domingoOpt===true?this.diasElegidos.push("Domingo"):this.diasElegidos;
    
     /* Lo enviamos al servidor de BD */
    let userActual =  localStorage.getItem('username');
    this.newReminder = {username: userActual, reason: this.motivo, day: this.diasElegidos, repeat: this.repetir};

    this._reminderService.newReminder(this.newReminder).subscribe(
      res => {
        this.router.navigate(['/reminders/', 'list']); 
        this.toastr.success('El recordatorio ha sido añadido con éxito', 'Recordatorio añadido!');
      },
      err => this.toastr.error('El recordatorio no pudo ser añadido, favor revisar los datos ingresados', 'ERROR')
    )
  }


}
