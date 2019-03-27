import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/Todo';
import _ from 'lodash';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {


  todoList:Todo[] = [];

  @Output()
  todoCheckIsDone:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  checkIsDone(todo){
    const todoToUpdate = this.todoList.find(item => item.title === todo.title);
    const otherTodo = _.without(this.todoList, todoToUpdate);

    this.todoList = [...otherTodo, {...todoToUpdate, isDone : !todoToUpdate.isDone}];

  }

  handleTodoAdd(todo) {
    this.todoList = [...this.todoList, todo];
  }

  handleReset(){
    this.todoList=[];
  }

  ngOnInit() {
  }

}
