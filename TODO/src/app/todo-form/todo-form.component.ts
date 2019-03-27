import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from "../model/Todo";


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  todo:Todo;
  title:string;

  @Output()
  todoAdd:EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  reset:EventEmitter<void> = new EventEmitter<void>();

  handleInputText(event) {
    this.todo = new Todo(event.target.value, false);
  }

  addTodo(){
    this.todoAdd.emit(this.todo);
  }

  resetTodo(){
    this.reset.emit();
  }

  ngOnInit() {
  }

}
