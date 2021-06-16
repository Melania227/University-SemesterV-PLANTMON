import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    console.log('entra');
    let userActual = localStorage.getItem('username');
    if (userActual == null) {
      console.log('No estás logueado');
      this.router.navigate(['/']);
      return false;
    }
    return true;
    
  }
}
