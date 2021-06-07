import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string = "";
  password: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  sendData(userLoginForm){
    this.correo = userLoginForm.form.value.email;
    this.password = userLoginForm.form.value.password;
    console.log(this.correo);
    console.log(this.password);
  }

}
