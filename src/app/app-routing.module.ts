import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarExperienciaComponent } from './components/acercade/editar-experiencia.component';
import { NewExperienciaComponent } from './components/acercade/new-experiencia.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nuevaExp', component: NewExperienciaComponent },
  { path: 'editarExp/:id', component: EditarExperienciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
