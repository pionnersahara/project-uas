import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaketComponent } from './addpaket.component';

describe('AddpaketComponent', () => {
  let component: AddpaketComponent;
  let fixture: ComponentFixture<AddpaketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpaketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
