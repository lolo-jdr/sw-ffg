import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {

  private subject = new Subject<any>();

  constructor() { }

  getModal(): Observable<any> {
    return this.subject.asObservable();
  }

  show(img:string, title:string) {
    console.log("show required: " + img);
    this.subject.next({img: img, title: title});
  }

}
