import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallBackEndService {

  BaseUrl: string = 'https://api.covid19api.com/country/';

  onQuery(options){
    return this.http.get(`${this.BaseUrl}${options}`);
  }

  constructor(private http: HttpClient) { }
}
