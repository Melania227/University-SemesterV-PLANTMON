import { Injectable } from '@angular/core';
import { User, UserLogin } from "../models/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient){
  }

  /* New User */
  signUp(user:User){
    return this.http.post<any>(this.URL+'users/', user);
  }

  /* Login */
  logIn(user:UserLogin){
    return this.http.post<any>(this.URL+'users/LogIn/', user);
  }

}
