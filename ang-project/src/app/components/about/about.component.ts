import { Component, OnInit } from '@angular/core';
import { SaNewsService } from '../.././services/sa-news.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public allSaNews = [];

  constructor(public _SaNewsService:SaNewsService) {
    this._SaNewsService.saNews().subscribe((news)=>{
      
      this.allSaNews = news.articles;
      console.log(this.allSaNews);

    })
   }

  ngOnInit(): void {
  }

}
