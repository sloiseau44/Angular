import { Component, OnInit } from '@angular/core';
import {Pub} from "../model/Pub";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PubServices} from "../services/pubService";

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {

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
