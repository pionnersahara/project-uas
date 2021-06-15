import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripappComponent } from './tripapp.component';

describe('TripappComponent', () => {
  let component: TripappComponent;
  let fixture: ComponentFixture<TripappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
