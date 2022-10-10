import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReportWeb';
  
  constructor(private modalService: NgbModal){
  }
  
  ngOnInit(){
    this.goDown();

  }
  
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  goDown(){
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
}
