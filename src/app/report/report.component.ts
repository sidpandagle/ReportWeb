import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Report } from '../_models/reports';
import { ReportSample } from '../_models/reportsample';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  report: Report;
  countries: Country[];
  reportSample: ReportSample;
  
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.report = new Report();
    this.countries=[];
    this.reportSample= new ReportSample();
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    fetch('./assets/countries.json').then(res => res.json())
    .then(jsonData => {
      this.countries = jsonData;
      console.log(this.countries)
    });
    if (id != 0) {
      this.api.getReportById(id).subscribe((res: any) => {
        this.report = res;
        this.report.description = this.report.description.replace(/\\n/g, "");
        this.report.description = this.report.description.replace(/\\/g, "");
        console.log(this.report.description)
      })
    }
  }

  sumbitSample(){
    this.api.addReportSample(this.reportSample).subscribe(res=>{
      alert('Report Sample Request Submtted')
    })
  }

}


export class Country{
  country: string ='';
}