import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchasesreturnComponent } from './addpurchasesreturn.component';

describe('AddpurchasesreturnComponent', () => {
  let component: AddpurchasesreturnComponent;
  let fixture: ComponentFixture<AddpurchasesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpurchasesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpurchasesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
