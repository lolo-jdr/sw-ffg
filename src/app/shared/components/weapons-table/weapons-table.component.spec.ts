import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsTableComponent } from './weapons-table.component';

describe('WeaponsTableComponent', () => {
  let component: WeaponsTableComponent;
  let fixture: ComponentFixture<WeaponsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
