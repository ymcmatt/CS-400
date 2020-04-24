import { Component, Output } from '@angular/core';
import { range } from 'rxjs';
import { Data } from './Data';
import { JsonData } from './DataMock'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jsonData = JsonData;
  private StatsGot: Data;
  isShow = true;
  
  title = 'PS6';

  constructor(){
  } 

  getStats(data: Data){
    this.StatsGot = data;   
    }

 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  }


