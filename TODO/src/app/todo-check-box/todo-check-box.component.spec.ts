import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCheckBoxComponent } from './todo-check-box.component';

describe('TodoCheckBoxComponent', () => {
  let component: TodoCheckBoxComponent;
  let fixture: ComponentFixture<TodoCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
