import {PATH_RECHERCHE, PATH_DETAIL, PATH_DETAIL_BIERE, PATH_DETAIL_HORAIRE} from "./app.routes.constantes";
import {RechercheComponent} from "./recherche/recherche.component";
import {Routes} from "@angular/router";
import {DetailComponent} from "./detail/detail.component";
import {BiereComponent} from "./biere/biere.component";
import {HoraireComponent} from "./horaire/horaire.component";


export const ROUTES: Routes = [
  {path: PATH_RECHERCHE, component: RechercheComponent},
  {path: PATH_DETAIL+"/:pubName", component: DetailComponent,
    children: [
      { path: PATH_DETAIL_BIERE+"/:pubName", component: BiereComponent},
      { path: PATH_DETAIL_HORAIRE+"/:pubName", component: HoraireComponent},
    ]
  }

]
