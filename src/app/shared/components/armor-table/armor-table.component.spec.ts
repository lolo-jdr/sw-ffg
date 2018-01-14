import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorTableComponent } from './armor-table.component';

describe('ArmorTableComponent', () => {
  let component: ArmorTableComponent;
  let fixture: ComponentFixture<ArmorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
