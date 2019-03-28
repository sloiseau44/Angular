import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatCheckboxModule, MatInputModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoCheckBoxComponent } from './todo-check-box/todo-check-box.component';

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
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
