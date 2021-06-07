import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  correo: string = "";
  password: string = "";
  fechaNacimiento: Date;
  tipo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  sendData(userSignUpForm){
    this.correo = userSignUpForm.form.value.email;
    this.password = userSignUpForm.form.value.password;
    this.fechaNacimiento = userSignUpForm.form.value.date;
    this.tipo = userSignUpForm.form.value.tipo;
    console.log(this.correo);
    console.log(this.password);
    console.log(this.fechaNacimiento);
    console.log(this.tipo);
  }

}
