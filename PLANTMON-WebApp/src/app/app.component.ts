import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PLANTMON-WebApp';

  constructor(private router: Router, private toastr: ToastrService){
  }

    hasRoute(route: string) {
      return this.router.url.includes(route);
    }
}
