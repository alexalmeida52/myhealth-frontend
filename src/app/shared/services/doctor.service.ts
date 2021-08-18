import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGetDoctors } from '../models/responseGetDoctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl = 'http://localhost:3333'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private httpClient: HttpClient) { }

  public getCategorias(): Observable<ResponseGetDoctors[]> {
    return this.httpClient.get<ResponseGetDoctors[]>(this.baseUrl + '/doctors');
  }
}
