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
  navSelection: NavSelection[];
  reportId:number;
  
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.report = new Report();
    this.reportId=0;
    this.countries = [];
    this.navSelection = [
      {
        name: 'Overview',
        selected: true
      },
      {
        name: 'Table Of Content',
        selected: false
      },
      {
        name: 'Major Market Players',
        selected: false
      },
      {
        name: 'Inquiry Before Buying',
        selected: false
      },
    ];
    this.reportSample = new ReportSample();
  }

  ngOnInit(): void {
    this.reportId = Number(this.route.snapshot.paramMap.get('id'));
    
    fetch('./assets/countries.json').then(res => res.json())
      .then(jsonData => {
        this.countries = jsonData;
        console.log(this.countries)
      });
    if (this.reportId != 0) {
      this.api.getReportById(this.reportId).subscribe((res: any) => {
        this.report = res;
        this.report.description = this.report.description.replace(/\\n/g, "");
        this.report.description = this.report.description.replace(/\\/g, "");
        console.log(this.report.description)
      })
    }
  }

  sumbitSample() {
    this.reportSample.report_id = this.reportId;
    this.api.addReportSample(this.reportSample).subscribe(res => {
      alert('Report Sample Request Submtted')
    })
  }

  selectNav(index:number){
    this.navSelection.map(res=>res.selected=false);
    this.navSelection[index].selected =true;
  }

  checkNavSelection(){
    return this.navSelection.filter(res=>res.selected)[0].name;
  }

}


export class Country {
  country: string = '';
}

export class NavSelection {
  name: string = '';
  selected: boolean = false;
}