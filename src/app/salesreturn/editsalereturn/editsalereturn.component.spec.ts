import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalereturnComponent } from './editsalereturn.component';

describe('EditsalereturnComponent', () => {
  let component: EditsalereturnComponent;
  let fixture: ComponentFixture<EditsalereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalereturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsalereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
