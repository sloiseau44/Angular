import { Component, OnInit } from '@angular/core';
import {Pub} from "../model/Pub";
import {PubServices} from "../services/pubService";
import {Router} from "@angular/router";
import {PATH_DETAIL} from "../app.routes.constantes";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  pubs:Pub[];
  pubToFind:Pub;

  constructor(private pubServices : PubServices, private router: Router ) { }

  async ngOnInit() {
    this.pubs = await this.pubServices.getTodoJson();
  }

  async handleRecherche(name){
    this.pubs.forEach((pub)=>{

      if(pub.name===name.target.value){
        this.pubToFind=pub;
      }

    })
  }

  addRecherche(){
    if(this.pubToFind===undefined){
      alert("Le pub choisit n'existe pas");
    }else {
      this.router.navigate([PATH_DETAIL], { fragment:this.pubToFind.name});
    }
  }

}
