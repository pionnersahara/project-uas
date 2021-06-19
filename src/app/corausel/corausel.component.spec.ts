import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorauselComponent } from './corausel.component';

describe('CorauselComponent', () => {
  let component: CorauselComponent;
  let fixture: ComponentFixture<CorauselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorauselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorauselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
