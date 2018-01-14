import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent implements OnInit {
  @ViewChild('imgModal') imgModal:ElementRef;

  protected title:string;
  protected img:string;

  constructor(private modalService: ModalService) { 
  }

  ngOnInit() {
    this.modalService.getModal().subscribe((image: any) => {
      
      if (!image.img && !image.title ) {
        return;
      }

      this.title = image.title;
      this.img = image.img;
      console.log(this.imgModal);
      this.imgModal.nativeElement.click();

    });
  }

}
