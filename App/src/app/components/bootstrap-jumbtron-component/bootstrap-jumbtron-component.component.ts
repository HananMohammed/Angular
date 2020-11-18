import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-jumbtron-component',
  templateUrl: './bootstrap-jumbtron-component.component.html',
  styleUrls: ['./bootstrap-jumbtron-component.component.css']
})
export class BootstrapJumbtronComponentComponent implements OnInit {
  headerText = `Hello Hanan`;
  constructor() { }

  ngOnInit(): void {
  }

}
