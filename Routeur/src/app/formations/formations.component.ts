import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:any[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:Formation[])=>this.formations=data['formations']);

  }

}
