import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dbInfo } from '../models/database.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private URL: string = 'http://localhost:80/';
  //private URL: string = 'http://192.168.100.19:80/';

  constructor(private http: HttpClient){
  }

  /* Get */
  getDBInfo(): Observable<dbInfo[]>{
    return this.http.get<dbInfo[]>(this.URL+'PlantInfo/');
  }

  getPlantInfoByName( name: string): Observable<dbInfo>{
    return this.http.get<dbInfo>(this.URL+'PlantInfo/'+name);
  }

 
}
