import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabed-content-component',
  templateUrl: './tabed-content-component.component.html',
  styleUrls: ['./tabed-content-component.component.css']
})
export class TabedContentComponentComponent implements OnInit {

  activeLink = "" ;

  constructor() { }

  ngOnInit(): void {
  }

}
