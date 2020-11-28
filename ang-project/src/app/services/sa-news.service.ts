import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaNewsService {

 
  constructor(public _HttpClient: HttpClient) {

  }
  
  saNews():Observable<any>{

    return this._HttpClient.get("http://newsapi.org/v2/top-headlines?country=sa&apiKey=aa1f6513724949408ff9dc16da738771");

  }
}
