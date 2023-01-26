import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  url:string = 'https://catfact.ninja/fact';




  constructor(private http: HttpClient) { }

  getCatfact():any{
    return this.http.get(this.url);
  }




}


