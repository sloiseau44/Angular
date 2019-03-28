import {Formation} from'../model/Formation';
import {Injectable} from "@angular/core";

@Injectable({providedIn : 'root'})
export class FormationApi {
  fetchFormation():Promise<Array<Formation>> {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve([
          new Formation("Angular", 'Module Angular'),
          new Formation("ES6", 'Module JavaScript'),
          new Formation("TS", 'Module TypeScript'),
        ])
      }, 2000);
    });
  }
}
