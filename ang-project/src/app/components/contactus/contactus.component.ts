import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

contactFormGroup = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  checkbox: new FormControl(''),
})
  sendMessage(){
    console.log(this.contactFormGroup)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
