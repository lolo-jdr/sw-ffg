import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSingleComponent } from './careers-single.component';

describe('CareersSingleComponent', () => {
  let component: CareersSingleComponent;
  let fixture: ComponentFixture<CareersSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
