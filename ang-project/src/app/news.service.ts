import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//Access Modifier 
export class NewsService {

  constructor(public _HttpClient:HttpClient){

  }

  getNews(){
     return this._HttpClient.get("http://newsapi.org/v2/top-headlines?country=eg&apiKey=aa1f6513724949408ff9dc16da738771");
  }

}
