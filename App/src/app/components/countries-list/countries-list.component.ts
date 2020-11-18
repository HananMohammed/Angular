import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  @Input("selectedCountry") selectedCountry;
  @Output()countryUpdated = new EventEmitter();
  country:string;
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
  countryChanged(){
    this.countryUpdated.emit(this.country);
  }
}
