import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpackingComponent } from './editpacking.component';

describe('EditpackingComponent', () => {
  let component: EditpackingComponent;
  let fixture: ComponentFixture<EditpackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
