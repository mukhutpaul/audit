import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestionUniteComponent } from './pages/gestion-unite/gestion-unite.component';
import { LoginComponent } from './pages/login/login.component';
import { GestionMissionComponent } from './pages/gestion-mission/gestion-mission.component';
import { FUniteComponent } from './Formulaires/funite/funite.component';
import { FMissionComponent } from './Formulaires/fmission/fmission.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'unite', component: GestionUniteComponent },
  { path: 'mission', component: GestionMissionComponent },
  { path: 'home', component: HomeComponent },

  { path: 'funite', component: FUniteComponent },
  { path: 'fmission', component: FMissionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
