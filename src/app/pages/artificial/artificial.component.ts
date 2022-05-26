import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artificial',
  templateUrl: './artificial.component.html',
  styleUrls: ['./artificial.component.scss']
})
export class ArtificialComponent implements OnInit {

  selectValue: string[];

  constructor() { }

  ngOnInit() {
    this.selectValue = ['Alaska', 'Pune'];
  }

}
