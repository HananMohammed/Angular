import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
countries = [
  {name:"Egypt" , value:"egypt"},
  {name:"Syria" , value:"syria"},
  {name:"Tunisia" , value:"tunisia"},
  {name:"Maracco" , value:"maraco"},
  {name:"Saudi Arabia" , value:"saudi arabia"},
];
  constructor() { }

  ngOnInit(): void {
  }

}
