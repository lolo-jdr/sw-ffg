import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculesTableComponent } from './vehicules-table.component';

describe('VehiculesTableComponent', () => {
  let component: VehiculesTableComponent;
  let fixture: ComponentFixture<VehiculesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
