import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititemmasterComponent } from './edititemmaster.component';

describe('EdititemmasterComponent', () => {
  let component: EdititemmasterComponent;
  let fixture: ComponentFixture<EdititemmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdititemmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdititemmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
