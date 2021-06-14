import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monitoring, MonitoringToEdit, SensorData } from '../models/monitoring.model';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  private URL: string = 'http://localhost:80/';

  constructor(private http: HttpClient){
  }

  /* Get */
  getMonitoringByUser(user: string): Observable<Monitoring[]>{
    console.log(this.URL+'WithSensorsInventory/'+user);
    return this.http.get<Monitoring[]>(this.URL+'WithSensorsInventory/'+user);
  }

  getPlantByName(user: string, name: string): Observable<Monitoring>{
    return this.http.get<Monitoring>(this.URL+'WithSensorsInventory/'+user+"/"+name);
  }

  getPlantsSensorsById(id: string):Observable<SensorData[]>{
    return this.http.get<SensorData[]>(this.URL+'SensorInfo/'+id);
  }

  /* Create  */
  newReminder(control:Monitoring){
    return this.http.post<any>(this.URL+'WithSensorsInventory/', control);
  }

  /* Patch */
  editReminder(control:MonitoringToEdit){
    return this.http.patch<any>(this.URL+'WithSensorsInventory/', control);
  }

  /* Delete */
  deletePlant(username: string, plantName: string){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
          username: username,
          plantName: plantName
      },
    };
    return this.http.delete<any>(this.URL+'WithSensorsInventory/', options);
  }

}
