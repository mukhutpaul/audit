import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';
import { GestionUniteComponent } from './pages/gestion-unite/gestion-unite.component';
import { LoginComponent } from './pages/login/login.component';
import { GestionMissionComponent } from './pages/gestion-mission/gestion-mission.component';
import { FUniteComponent } from './Formulaires/funite/funite.component';
import { FMissionComponent } from './Formulaires/fmission/fmission.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    WrapperComponent,
    GestionUniteComponent,
    LoginComponent,
    GestionMissionComponent,
    FUniteComponent,
    FMissionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
