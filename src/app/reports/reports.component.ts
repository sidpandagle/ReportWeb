import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  count(num:number){
    return new Array(num)
  }

  randomRating(){
    let x = 0;
    while(x<=50){
    x = Math.random()*100;
    }
    return x+'%';
  }
}
