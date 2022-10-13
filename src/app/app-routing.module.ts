import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportComponent } from './report/report.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/homepage', pathMatch:'full'
  },
  {
    path:'reports', component: ReportsComponent
  },
  {
    path:'report', component: ReportComponent
  },
  {
    path:'homepage', component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
