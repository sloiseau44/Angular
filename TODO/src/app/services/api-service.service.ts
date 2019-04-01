import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/Todo";

const URL = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getJson(){
    return this.http.get(URL);
  }

  createTodo(todo:Todo){
    return this.http.post(`http://localhost:3000/todos/`, todo);
  }

  toggleTodo(todo:Todo){
    return this.http.put(`http://localhost:3000/todos/${todo.id}`, {...todo, isDone : !todo.isDone});
  }

  deleteTodo(todo:Todo){
    return this.http.delete(`http://localhost:3000/todos/${todo.id}`);
  }


}
