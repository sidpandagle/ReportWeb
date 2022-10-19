import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../_models/category';
import { Report } from '../_models/reports';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reports: Report[]
  categories: Category[]
  
  constructor(private api: ApiService) { 
    this.reports=[]
    this.categories=[]
  }

  ngOnInit(): void {
    this.getAllReports();
    this.getAllCategories();
  }

  count(num:number){
    return new Array(num)
  }

  
  getAllReports(){
    this.api.getAllReports().subscribe((res:any)=>{
      this.reports = res;
    }) 
  }

  getAllCategories(){
    this.api.getAllCategories().subscribe((res:any)=>{
      this.categories = res;
    }) 
  }

  getReportsByCategory(){
    this.reports =  this.reports.sort( () => .5 - Math.random() );
  }

  randomRating(){
    let x = 0;
    while(x<=50){
    x = Math.random()*100;
    }
    return x+'%';
  }
}
