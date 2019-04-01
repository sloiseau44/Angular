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
  todoAdd:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  reset:EventEmitter<void> = new EventEmitter<void>();

  handleInputText(event) {
    this.title = event.target.value;
  }

  addTodo(){
    this.todoAdd.emit(this.title);
  }

  resetTodo(){
    this.reset.emit();
  }

  ngOnInit() {
  }

}
