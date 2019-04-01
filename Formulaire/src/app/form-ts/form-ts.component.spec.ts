import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTSComponent } from './form-ts.component';

describe('FormTSComponent', () => {
  let component: FormTSComponent;
  let fixture: ComponentFixture<FormTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
