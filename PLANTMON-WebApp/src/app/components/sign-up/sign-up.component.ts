import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "../../models/user.model";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  newUser:User;

  constructor(
    private _userService: UserService, 
    private router: Router,
    private toastr: ToastrService
  ) { }

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

     /* Lo enviamos al servidor de BD */
     this.newUser = {email: this.correo, password: this.password, type: this.tipo, birthDate: this.fechaNacimiento};

     this._userService.signUp(this.newUser).subscribe(
         res => {
           localStorage.setItem('username', res.username);
           localStorage.setItem('tipo', res.type);
           this.router.navigate(['/', 'home']); 
           this.toastr.success('Cuenta creada con éxito', '¡Bienvenido!');
          },
          err => this.toastr.error('Creación de cuenta inválida, corrobore los datos ingresados', 'ERROR')
     )
 
     /* this.popNotificationService.success("User successfully created");*/
     
  }

  
  logout(){
    this.router.navigate(['/', 'init']); 
  }


}
