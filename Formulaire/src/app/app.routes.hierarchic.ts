import {Routes} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {PATH_FORM, PATH_FORMTS} from "./app.routes.constantes";
import {FormTSComponent} from "./form-ts/form-ts.component";

export const ROUTES: Routes = [
  {path: PATH_FORM, component:FormComponent},
  {path: PATH_FORMTS, component:FormTSComponent}
]
