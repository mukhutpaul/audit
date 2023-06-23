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
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, SPINNER } from 'ngx-ui-loader';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text:"Loading...",
  textColor:"#3c65e8",
  textPosition:"center-center",
  pbColor:"#3c65e8",
  bgsColor:"#3c65e8",
  fgsColor:"#3c65e8",
  fgsType:SPINNER.ballSpinClockwiseFadeRotating,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
}

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
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
