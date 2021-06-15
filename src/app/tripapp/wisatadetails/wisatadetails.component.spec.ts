import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WisatadetailsComponent } from './wisatadetails.component';

describe('WisatadetailsComponent', () => {
  let component: WisatadetailsComponent;
  let fixture: ComponentFixture<WisatadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WisatadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WisatadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
