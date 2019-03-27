import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-check-box',
  templateUrl: './todo-check-box.component.html',
  styleUrls: ['./todo-check-box.component.css']
})
export class TodoCheckBoxComponent implements OnInit {

  @Input()
  todo:Todo;

  @Output()
  todoCheckIsDone:EventEmitter<Todo> = new EventEmitter<Todo>();

  checkIsDone() {
    this.todoCheckIsDone.emit(this.todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
