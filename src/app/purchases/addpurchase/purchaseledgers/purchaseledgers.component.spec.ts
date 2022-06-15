import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseledgersComponent } from './purchaseledgers.component';

describe('PurchaseledgersComponent', () => {
  let component: PurchaseledgersComponent;
  let fixture: ComponentFixture<PurchaseledgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseledgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseledgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
