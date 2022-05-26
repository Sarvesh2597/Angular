import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.scss']
})
export class FormulasComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  selectValue: string[];

  constructor(private modalService: NgbModal) { }

  // tslint:disable-next-line:variable-name
  ngOnInit() {

    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Components', path: '/' }, { label: 'Bootstrap UI', active: true }];

    this.selectValue = ['Alaska', 'Pune'];

  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }

}
