import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGetDoctorAvailability } from '../models/responseGetDoctorAvailability.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorAvailabilityService {
  baseUrl = 'http://localhost:3333'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private http: HttpClient) { }

  public getSchedules(id) {
    return this.http.get<String[]>(this.baseUrl + '/doctor-availability/' + id);
  }

  


}
