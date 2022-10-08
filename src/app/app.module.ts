import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioService } from './servicios/portfolio.service';
import { FormsModule } from '@angular/forms';
import { UiService } from './servicios/ui.service';


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { BotonAgregarComponent } from './components/boton-agregar/boton-agregar.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { HeaderExperienciaComponent } from './components/header-experiencia/header-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    BotonAgregarComponent,
    AddExperienciaComponent,
    HeaderExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PortfolioService, 
    UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
