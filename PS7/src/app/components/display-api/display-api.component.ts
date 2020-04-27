import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})
export class DisplayAPIComponent implements OnInit {

  @Input() data: any;

  options: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
