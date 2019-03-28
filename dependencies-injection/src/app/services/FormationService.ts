import {Injectable} from '@angular/core';
import {Formation} from '../model/Formation';
import {FormationApi} from './FormationApi';

@Injectable()
export class FormationService{
  constructor(private formationApi:FormationApi){}

  getFormation():Formation[]{
    return [new Formation("Angular","Formation Andgular"), new Formation("Java8", "Formation Java8"), new Formation("ES6", "Formation ES6")];
  }
}
