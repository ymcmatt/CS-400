import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShow = true;
  data: string;
  

  constructor(){
  } 

  receiveMessage($event){
    this.data = $event;
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  }


