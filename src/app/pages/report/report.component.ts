import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  //  /**
  //  * Open modal
  //  * @param content modal content
  //  */
  // openModal(content: any) {
  //   this.modalService.open(content);
  // }

  /**
   * Open Large modal
   * @param largeDataModal large modal data
   */
  largeModal(largeDataModal: any) {
    this.modalService.open(largeDataModal, { size: 'lg' });
  }


}
