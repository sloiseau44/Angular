import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';
import {FormationService} from "../services/FormationService";

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css'],
  providers: [FormationService]
})
export class FormationListComponent implements OnInit {

  formations:Formation[];

  constructor(private formationService:FormationService) { }

  ngOnInit() {
    this.formations = this.formationService.getFormation();
  }

}
