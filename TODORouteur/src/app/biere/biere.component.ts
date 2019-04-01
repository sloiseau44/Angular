import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PubServices} from "../services/pubService";
import {Pub} from "../model/Pub";

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {

  pub:Pub;
  name:string;

  constructor(private route:ActivatedRoute, private pubServices : PubServices) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.name=params.get('pubName');
    });

    this.pub = await this.pubServices.findPub(this.name);
  }



}
