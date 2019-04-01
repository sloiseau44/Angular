import {Injectable} from "@angular/core";
import _ from 'lodash';
import {Todo} from "../model/Todo";
import {ApiServiceService} from "../services/api-service.service";

@Injectable({providedIn: "root"})
export class TodoServices {

  todoList: Todo[] = [];

  constructor(private apiServiceService: ApiServiceService) {
  }

  async checkIsDone(todo) {
    const todoToUpdate = this.todoList.find(item => item.id === todo.id);
    const otherTodo = _.without(this.todoList, todoToUpdate);
    this.apiServiceService.toggleTodo(todoToUpdate).subscribe();
    return this.todoList = [...otherTodo, {...todoToUpdate, isDone: !todoToUpdate.isDone}].sort((a, b) => a.id - b.id);
  }

  async handleTodoAdd(title) {
    let todoToAdd:Todo = new Todo(this.todoList.length+1,title,false);
    this.apiServiceService.createTodo(todoToAdd)
      .subscribe((todo:any)=>{
        this.todoList = [...this.todoList, todo].sort((a,b) => a.id-b.id);
      });
    return this.todoList = [...this.todoList, todoToAdd ];
  }

  async handleReset() {
    this.todoList.forEach((todo) => {
      this.apiServiceService.deleteTodo(todo).subscribe();
    });

    return this.todoList = [];
  }

  async getTodoJson() {
    const data: any[] = await (this.apiServiceService.getJson().toPromise() as Promise<any[]>);
    return this.todoList = data.map((todo) => {
      return  todo;
    })
  }
}
