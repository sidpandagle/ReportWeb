import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Report } from '../_models/reports';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  reports: Report[];
  constructor(private api: ApiService) { 
    this.reports=[];
  }

  ngOnInit(): void {
    this.getAllReports();
  }

  count(val:number){
    return new Array(val);
  }

  getAllReports(){
    this.api.getAllReports().subscribe((res:any)=>{
      this.reports = res;
      this.reports = this.reports.map(res=>{
        res.title = res.title.split('Size')[0];
        return res;
      })
      this.reports = this.reports.filter((res,i)=>i<8)
    })
  }

}
