import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoCheckBoxComponent } from './todo-check-box/todo-check-box.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    TodoContainerComponent,
    TodoCheckBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
