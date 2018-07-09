import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/accordion';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  public customClass: string ;
  public isFirstOpen: boolean;
  
  constructor() {

   }

  ngOnInit() {
    this.customClass ="customClass";
    this.isFirstOpen = true;
  }

}
