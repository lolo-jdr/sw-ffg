import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationsTableComponent } from './motivations-table.component';

describe('MotivationsTableComponent', () => {
  let component: MotivationsTableComponent;
  let fixture: ComponentFixture<MotivationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
