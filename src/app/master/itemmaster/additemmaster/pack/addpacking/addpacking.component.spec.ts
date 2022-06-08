import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpackingComponent } from './addpacking.component';

describe('AddpackingComponent', () => {
  let component: AddpackingComponent;
  let fixture: ComponentFixture<AddpackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
