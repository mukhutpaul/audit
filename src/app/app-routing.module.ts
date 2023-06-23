import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestionUniteComponent } from './pages/gestion-unite/gestion-unite.component';
import { LoginComponent } from './pages/login/login.component';
import { GestionMissionComponent } from './pages/gestion-mission/gestion-mission.component';
import { FUniteComponent } from './Formulaires/funite/funite.component';
import { FMissionComponent } from './Formulaires/fmission/fmission.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { FinancierComponent } from './pages/financier/financier.component';
import { AuditComponent } from './pages/audit/audit.component';
import { DocumentComponent } from './pages/document/document.component';
import { DetailAuditComponent } from './pages/detail-audit/detail-audit.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MissionUniteComponent } from './pages/mission-unite/mission-unite.component';
import { GradeComponent } from './pages/grade/grade.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'unite', component: GestionUniteComponent },
  { path: 'mission', component: GestionMissionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'financier', component: FinancierComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'Document', component: DocumentComponent },

  { path: 'funite', component: FUniteComponent },
  { path: 'fmission', component: FMissionComponent },
  { path: 'detailaudit', component: DetailAuditComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'missionunite', component: MissionUniteComponent},
  { path: 'grade', component: GradeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
