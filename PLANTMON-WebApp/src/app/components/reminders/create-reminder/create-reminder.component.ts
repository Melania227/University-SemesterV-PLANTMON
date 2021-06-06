import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css']
})
export class CreateReminderComponent implements OnInit {
  motivo: string ="";
  diasElegidos=[false,false,false,false,false,false,false];
  repetir=false;

  constructor() { }

  ngOnInit(): void {
  }

  sendData(plantForm){
    this.motivo=plantForm.form.value.motivo;
    this.repetir=plantForm.form.value.repeat===true;
    this.diasElegidos[0]=plantForm.form.value.lunesOpt===true;
    this.diasElegidos[1]=plantForm.form.value.martesOpt===true;
    this.diasElegidos[2]=plantForm.form.value.miercolesOpt===true;
    this.diasElegidos[3]=plantForm.form.value.juevesOpt===true;
    this.diasElegidos[4]=plantForm.form.value.viernesOpt===true;
    this.diasElegidos[5]=plantForm.form.value.sabadoOpt===true;
    this.diasElegidos[6]=plantForm.form.value.domingoOpt===true;
    console.log(this.motivo);
    console.log(this.repetir);
    console.log(this.diasElegidos);
  }


}
