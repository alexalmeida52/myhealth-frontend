import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGetSchedulings } from '../models/responseGetSchedulings.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  baseUrl = 'http://localhost:3333'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private httpClient: HttpClient) { }

  public getSchedulings(): Observable<ResponseGetSchedulings[]> {
    return this.httpClient.get<ResponseGetSchedulings[]>(this.baseUrl + '/schedulings');
  }
}
