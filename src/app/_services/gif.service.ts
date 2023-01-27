import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  url:string = 'https://api.giphy.com/v1/gifs';
  apiKey:string = 'rV8SHpmCe6IsoU5u0kqUF9LBj3p8RUFw';
  limit:string = '1';


  constructor(private http: HttpClient) { }


getGiphbySearch(word:string):Observable<any>{
  return this.http.get(`${this.url}/search?api_key=${this.apiKey}&q=${encodeURI(word)}&limit=${this.limit}`);
}

}
