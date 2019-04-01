import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:User = new User("totomail", 'totopsw');

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(){
    console.log('Form value', this.user);
  }
}
