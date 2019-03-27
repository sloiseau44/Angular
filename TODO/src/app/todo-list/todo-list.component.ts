import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList:Todo[];


  @Output()
  todoCheckIsDone:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  checkIsDone(todo){
    this.todoCheckIsDone.emit(todo);
  }

  ngOnInit() {
  }

}
