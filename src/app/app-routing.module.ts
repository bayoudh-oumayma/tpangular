import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  // {path:'',component:NavbarComponent},

  {path:'accueil',loadChildren:()=>import("./accueil/accueil.module").then(m=>m.AccueilModule)},
  
  {path:'cours',loadChildren:()=>import("./cours/cours.module").then(m=>m.CoursModule)},
  {path:'ressource',loadChildren:()=>import("./ressource/ressource.module").then(m=>m.RessourceModule)},
  {path:'contact',loadChildren:()=>import("./contact/contact.module").then(m=>m.ContactModule)},
  {path:'**',loadChildren:()=>import("./error/error.module").then(m=>m.ErrorModule)},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
