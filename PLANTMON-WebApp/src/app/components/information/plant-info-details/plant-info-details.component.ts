import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { dbInfo } from 'src/app/models/database.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-plant-info-details',
  templateUrl: './plant-info-details.component.html',
  styleUrls: ['./plant-info-details.component.css']
})
export class PlantInfoDetailsComponent implements OnInit {
  id: string;
  private sub: any;
  info:dbInfo[]=[];
  plantInfo:dbInfo;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _databaseService: DatabaseService
    ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];

       // In a real app: dispatch action to load the details here.
    });

    this._databaseService.getDBInfo().subscribe(
      res => {
        this.info=res;
      },
      err => console.log(err)
    )

    this._databaseService.getPlantInfoByName(this.id).subscribe(
      res => {
        this.plantInfo=res;
      },
      err => console.log(err)
    )

  }

  changeInfo(info:string){
    this.router.navigate(['/info/details/', info]); 

    this.id = info;

    this._databaseService.getPlantInfoByName(this.id).subscribe(
      res => {
        this.plantInfo=res;
      },
      err => console.log(err)
    )
  }

}
