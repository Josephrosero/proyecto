import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuperadminService } from './services/superadmin.service';
import { RegistroComponent } from './registro/registro.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { AuthenticationService } from './services/authentication.service';
import { ConfiguracionadminComponent } from './configuracionadmin/configuracionadmin.component';
import { ConfiguracionadminService } from './services/configuracionadmin.service';

const appRoutes:Routes = [
  
  
  {path:'login', component: LoginComponent},
  {path:'configuracionadmin', component: ConfiguracionadminComponent},

  {path:'homeadmin', component: HomeadminComponent},
  
  {path:'registro', component: RegistroComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeadminComponent,
    ConfiguracionadminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [SuperadminService, AuthenticationService, ConfiguracionadminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
