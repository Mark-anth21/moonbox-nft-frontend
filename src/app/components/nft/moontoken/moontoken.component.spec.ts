import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoontokenComponent } from './moontoken.component';

describe('MoontokenComponent', () => {
  let component: MoontokenComponent;
  let fixture: ComponentFixture<MoontokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoontokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoontokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
