import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/reports', pathMatch:'full'
  },
  {
    path:'reports', component: ReportsComponent
  },
  {
    path:'report', component: ReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
