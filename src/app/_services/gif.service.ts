import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  url:string = 'https://api.giphy.com/v1/gifs';
  apiKey:string = 'rV8SHpmCe6IsoU5u0kqUF9LBj3p8RUFw';
  limit:string = '1';


  constructor(private http: HttpClient) { }


getGiphbySearch(word:string){
  return this.http.get(`${this.url}/search?api_key=${this.apiKey}&q=${word}&limit=${this.limit}`);
}

}
