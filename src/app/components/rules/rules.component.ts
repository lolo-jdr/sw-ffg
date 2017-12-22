import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor(private modal: NgbModal, private modalService:ModalService) { }

  ngOnInit() {
  }

  open(img, title) {
    this.modalService.show(img, title);
  }
  
}
