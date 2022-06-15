import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituomComponent } from './edituom.component';

describe('EdituomComponent', () => {
  let component: EdituomComponent;
  let fixture: ComponentFixture<EdituomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
