import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/acercade/new-experiencia.component';
import { EditarExperienciaComponent } from './components/acercade/editar-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactmeComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditarExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
