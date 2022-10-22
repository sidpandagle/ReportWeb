import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportSample } from './_models/reportsample';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseUrl = 'https://reportapi176.herokuapp.com/'
  baseUrl = 'https://slbzqs.deta.dev/'
  // baseUrl = 'http://127.0.0.1:9000/'
  
  constructor(private http: HttpClient) { }

  getAllReports(){
    return this.http.get(this.baseUrl + 'report');
  }

  getReportById(id:number){
    return this.http.get(this.baseUrl + 'report/' + id);
  }

  getAllCategories(){
    return this.http.get(this.baseUrl + 'category');
  }

  addReportSample(reportSample: ReportSample){
    return this.http.post(this.baseUrl + 'reportsample', reportSample);
  }

}
