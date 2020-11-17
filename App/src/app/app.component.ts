import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  currentId:number ;
  name="Your Name" ;
  userData = {
    firstName : " " ,
    lastName : " "
  }
  handleClick(event){
    event.stopPropagation();
    console.log("button was Clicked");
    console.log("button was Clicked");
    console.log("button was Clicked");
    console.log(event);

  }
  divClicked(event){
    console.log("Div Was Clicked");
    
  }
  keyUpInput(event){
    console.log("keyUp Was Fired ");
    // if(event.keyCode === 13){
    //   console.log('Enter Was Pressed')
    // }
  }
  handeleInput(){
    console.log(this.userData.firstName);
  }
  handeleInput2(value) {
    console.log(value);
  }
}
