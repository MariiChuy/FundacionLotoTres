import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Vistas/Login/login.component';
import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './Vistas/Login/nuevo-usuario/nuevo-usuario.component';
import { CarruselComponent } from './Vistas/Dise/carrusel/carrusel.component';

const routes: Routes=[
  {path: '', component: AppComponent},
  {path:'Login',component:LoginComponent},
  {path:'nuevo',component: NuevoUsuarioComponent},
  {path:'carrusel',component:CarruselComponent}
  /* {path:'homeAdmin',component:HomeAdminComponent},
  {path:'ListaAct',component:ListActComponent},
  {path:'modificar',component:ModificarComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'ListUsa',component:ListUsuComponent},
  {path:'login',component:LoginComponent},
  {path:'restablecer',component:RestablecarComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'misActividades',component:MisActividadesComponent},
  {path:'LasActividad',component:LasActividadComponent},
  {path:'actividades',component:ActividadesComponent},
  {path:'MiActividad',component:ActividadesDeComponent},
  {path:'TodasApp',component:TodasActComponent},
  {path:'homeUsua',component:HomeUsuaComponent},
  {path:'homePulic',c */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
