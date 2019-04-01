import { Component, OnInit } from '@angular/core';
import {Connaissance} from "../model/Connaissance";

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances:Connaissance[];
  constructor() { }

  ngOnInit() {
    this.connaissances = [
      new Connaissance(1, "Exp Angular", 5),
      new Connaissance(2, 'Exp ES6', 10)
    ]
  }

}
