import { Injectable } from '@angular/core';
import { Inventory, InventoryToEdit } from "../models/inventory.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private URL: string = 'http://localhost:4000/';

  constructor(private http: HttpClient){
  }

  /* Get */
  getInventoryByUser(user: string): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.URL+'manualInventory/'+user);
  }

  /* Create  */
  newReminder(inventory:Inventory){
    return this.http.post<any>(this.URL+'manualInventory/', inventory);
  }

  /* Patch */
  editReminder(inventory:InventoryToEdit){
    return this.http.patch<any>(this.URL+'manualInventory/', inventory);
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
    return this.http.delete<any>(this.URL+'manualInventory/', options);
  }

}
