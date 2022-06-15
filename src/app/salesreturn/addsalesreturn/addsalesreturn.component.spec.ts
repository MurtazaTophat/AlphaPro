import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesreturnComponent } from './addsalesreturn.component';

describe('AddsalesreturnComponent', () => {
  let component: AddsalesreturnComponent;
  let fixture: ComponentFixture<AddsalesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsalesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsalesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
