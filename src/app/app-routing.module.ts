import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {AlumnosComponent} from "./alumnos/alumnos.component";
import {AlumnosDetailComponent} from "./alumnos-detail/alumnos-detail.component";
import {ConHeaderComponent} from "./con-header/con-header.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "", component: ConHeaderComponent, children:[
      {path:"alumnos", component: AlumnosComponent},
      {path:"detallesAlumnos", component: AlumnosDetailComponent},
    ]},


  {path:"", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
