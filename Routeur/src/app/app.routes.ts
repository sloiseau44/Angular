import { Routes, CanActivate } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormationsComponent} from './formations/formations.component';
import {ConnaissancesComponent} from './connaissances/connaissances.component';
import {DetailComponent} from "./detail/detail.component";
import {LoggedIn} from "./LoggedIn";
import {FormationsResolvers} from "./FormationsResolvers";

export const PATH_HOME = '';
export const PATH_DETAIL = 'detail/:idDetail';
export const PATH_DETAIL_FORMATIONS = 'formations';
export const PATH_DETAIL_CONNAISSANCES = 'connaissances';
export const ROUTES: Routes = [
  { path: PATH_HOME, component: HomeComponent },
  {
    path: PATH_DETAIL,
    component: DetailComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
      { path: PATH_DETAIL_FORMATIONS,
        component: FormationsComponent,
        resolve:{formations: FormationsResolvers}},
      { path: PATH_DETAIL_CONNAISSANCES, component: ConnaissancesComponent, canActivate : [LoggedIn]},
    ]
  }
];
