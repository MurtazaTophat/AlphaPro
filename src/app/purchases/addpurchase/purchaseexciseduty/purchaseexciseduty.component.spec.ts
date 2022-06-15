import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseexcisedutyComponent } from './purchaseexciseduty.component';

describe('PurchaseexcisedutyComponent', () => {
  let component: PurchaseexcisedutyComponent;
  let fixture: ComponentFixture<PurchaseexcisedutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseexcisedutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseexcisedutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
