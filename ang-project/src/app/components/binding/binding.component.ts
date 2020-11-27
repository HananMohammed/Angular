import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name = "Data Binding Session" ;
  img ="assets/images/bg-5.jpg";
  name2="hanan";
  constructor() { }

  ngOnInit(): void {
  }

}
