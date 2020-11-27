import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allEgyptNews =[];

  constructor(public _NewsService: NewsService) { 
   this.allEgyptNews =  this._NewsService.getNews();
  }

  ngOnInit(): void {
  }

}
