import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  @Input()
  techKnown: any = {};
  @Input()
  techName: string = '';

  flipped: boolean = false;
  rotate() {
    console.log("clicked");
    this.flipped = true;
  }

  ngOnInit() {
    console.log(this.techKnown.name);
  }

}
