import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service' ;
import { ActivatedRoute, Router } from '@angular/router' ;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id;
  public newsDetails

  constructor(public _ActivedRoute: ActivatedRoute , public _NewsService: NewsService) 
  { 
    this.id = this._ActivedRoute.snapshot.paramMap.get("id");
    this._NewsService.getNews().subscribe((news) => {
      this.newsDetails = news.articles[this.id] ;
      console.log(this.newsDetails);

    })

  }

  ngOnInit(): void {
  }

}
