import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpurchasesreturnComponent } from './editpurchasesreturn.component';

describe('EditpurchasesreturnComponent', () => {
  let component: EditpurchasesreturnComponent;
  let fixture: ComponentFixture<EditpurchasesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpurchasesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpurchasesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
