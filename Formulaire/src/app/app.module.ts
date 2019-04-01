import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ROUTES} from "./app.routes.hierarchic";
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";
import { FormTSComponent } from './form-ts/form-ts.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormTSComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
