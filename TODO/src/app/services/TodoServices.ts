import {Injectable} from "@angular/core";
import _ from 'lodash';
import {Todo} from "../model/Todo";

@Injectable({providedIn:"root"})
export class TodoServices{

  todoList:Todo[] = [];

  constructor(){}

  async checkIsDone( todo){
    const todoToUpdate = this.todoList.find(item => item.title === todo.title);
    const otherTodo = _.without(this.todoList, todoToUpdate);

    return this.todoList = [...otherTodo, {...todoToUpdate, isDone : !todoToUpdate.isDone}];
  }

  async handleTodoAdd( todo) {
    return this.todoList = [...this.todoList, todo];
  }

  async handleReset(){
    return this.todoList = [];
  }
}
