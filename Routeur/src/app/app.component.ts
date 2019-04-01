import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routeur';
  idDetail = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    })
  }


}
