import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class FormationsResolvers implements Resolve<any> {
  constructor() {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return [{
      id: 1,
      nom: 'Module Angular',
      decription: '',
    }, {
      id: 2,
      nom: 'Module JavaScript',
      decription: '',
    }, {
      id: 3,
      nom: 'Module TypeScript',
      decription: '',
    }];
  }
}
