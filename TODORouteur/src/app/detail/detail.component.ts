import { Component, OnInit } from '@angular/core';
import {Pub} from "../model/Pub";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PubServices} from "../services/pubService";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pub:Pub;
  pubs:Pub[];
  name:string;

  constructor(private route:ActivatedRoute, private pubServices : PubServices) { }

  async ngOnInit() {
    this.pubs = await this.pubServices.getTodoJson();
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.name=params.get('pubName');
    });
  }

}
