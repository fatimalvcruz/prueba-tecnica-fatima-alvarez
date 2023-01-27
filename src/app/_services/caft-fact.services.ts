import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  url:string = 'https://catfact.ninja/fact';




  constructor(private http: HttpClient) { }

  getCatfact():Observable<any>{
    return this.http.get(this.url);
  }




}


