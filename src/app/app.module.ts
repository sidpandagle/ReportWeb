import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReportComponent } from './report/report.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    ReportComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
