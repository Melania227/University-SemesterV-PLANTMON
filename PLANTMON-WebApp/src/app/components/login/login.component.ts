import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserLogin } from "../../models/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string = "";
  password: string = "";
  newUser: UserLogin;
  
  constructor(
    private _userService: UserService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendData(userLoginForm){
    this.correo = userLoginForm.form.value.email;
    this.password = userLoginForm.form.value.password;
    console.log(this.correo);
    console.log(this.password);

    /* Lo enviamos al servidor de BD */
    this.newUser = {email: this.correo, password: this.password};

    this._userService.logIn(this.newUser).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('username', res.username);
        localStorage.setItem('tipo', res.type);
      },
      err => console.log(err)
    )

    /* this.popNotificationService.success("User successfully created");*/
    this.router.navigate(['/', 'home']); 
  }

}
