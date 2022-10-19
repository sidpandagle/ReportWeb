import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Report } from '../_models/reports';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  report: Report;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.report = new Report();
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.api.getReportById(id).subscribe((res: any) => {
        this.report = res;
        this.report.description = this.report.description.replace(/\\n/g, " ");
        console.log(this.report.description)
      })
    }
  }

}
