import { Component, OnInit } from '@angular/core';
import {Pub} from "../model/Pub";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PubServices} from "../services/pubService";
import {PATH_DETAIL, PATH_DETAIL_BIERE, PATH_DETAIL_HORAIRE} from "../app.routes.constantes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pub:Pub;
  name:string;

  constructor(private route:ActivatedRoute, private pubServices : PubServices, private router:Router) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.name=params.get('pubName');
    });

    this.pub = await this.pubServices.findPub(this.name);
  }

  async handleHours(){
    this.router.navigate([PATH_DETAIL, this.pub.name, PATH_DETAIL_HORAIRE, this.pub.name]);
  }

  async handleBeers(){
    this.router.navigate([PATH_DETAIL, this.pub.name, PATH_DETAIL_BIERE, this.pub.name]);
  }

}
