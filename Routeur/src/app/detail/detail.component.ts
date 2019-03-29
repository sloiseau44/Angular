import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PATH_HOME} from "../app.routes.constantes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idDetail:any;
  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log('idDetail snapshot', this.route.snapshot.paramMap.get('idDetail'));
    this.idDetail=this.route.snapshot.paramMap.get('idDetail');
  }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

}
