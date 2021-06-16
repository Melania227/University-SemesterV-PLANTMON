import { Component, OnInit } from '@angular/core';
import { dbInfo } from 'src/app/models/database.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-plant-info-list',
  templateUrl: './plant-info-list.component.html',
  styleUrls: ['./plant-info-list.component.css']
})
export class PlantInfoListComponent implements OnInit {
  info:dbInfo[]=[];

  constructor(
    private _databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this._databaseService.getDBInfo().subscribe(
      res => {
        this.info=res;
      },
      err => console.log(err)
  )
  }

}
