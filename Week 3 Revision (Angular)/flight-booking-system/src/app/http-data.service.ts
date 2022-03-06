import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(public ht:HttpClient) { }
  getFlightData(){
    return this.ht.get("http://localhost:3000/flights");
  }
}
