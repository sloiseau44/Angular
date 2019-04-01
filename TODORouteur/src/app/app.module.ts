import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ROUTES} from "./app.routes.hierarchic";
import {RouterModule} from "@angular/router";
import { RechercheComponent } from './recherche/recherche.component';
import { DetailComponent } from './detail/detail.component';
import { BiereComponent } from './biere/biere.component';
import { HoraireComponent } from './horaire/horaire.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    DetailComponent,
    BiereComponent,
    HoraireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
