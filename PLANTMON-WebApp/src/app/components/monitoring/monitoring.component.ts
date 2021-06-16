import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  userType:string;

  constructor() { }

  ngOnInit(): void {
    this.userType=localStorage.getItem('tipo');
  }

}
