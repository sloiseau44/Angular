import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import {GithubApiService} from "./services/github-api.service";
import {SamplesHeaderInterceptor} from "./services/samples-header-interceptor.service";
import {SamplesErrorInterceptor} from "./services/samples-error-interceptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService,
    { provide: HTTP_INTERCEPTORS, useClass: SamplesHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SamplesErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
