import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/Todo';
import {TodoServices} from "../services/TodoServices";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {


  todoList:Todo[] = [];

  @Output()
  todoCheckIsDone:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoServices:TodoServices) { }

  async checkIsDone(todo){
    this.todoList = await this.todoServices.checkIsDone(todo);
    /*this.todoServices.checkIsDone(todo)
      .then((todoFinal) =>{this.todoList = todoFinal});*/
  }

  async handleTodoAdd(todo) {
    this.todoList = await this.todoServices.handleTodoAdd(todo);
  }

  async handleReset(){
    this.todoList = await this.todoServices.handleReset();
  }

  ngOnInit() {
  }

}
