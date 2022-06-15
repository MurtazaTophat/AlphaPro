import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsaleComponent } from './editsale.component';

describe('EditsaleComponent', () => {
  let component: EditsaleComponent;
  let fixture: ComponentFixture<EditsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
