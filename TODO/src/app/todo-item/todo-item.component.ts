import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  @Output()
  todoCheckIsDone:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  checkIsDone(todo){
    this.todoCheckIsDone.emit(todo);
  }

  ngOnInit() {
  }

}
