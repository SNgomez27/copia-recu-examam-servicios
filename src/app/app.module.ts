import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { HeaderComponent } from './header/header.component';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ConHeaderComponent } from './con-header/con-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    HeaderComponent,
    AlumnosDetailComponent,
    LoginComponent,
    ConHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
