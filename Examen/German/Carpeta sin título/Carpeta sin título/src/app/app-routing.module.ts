import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';


const routes: Routes = [
  {path: 'agregar', component: AgregarComponent},
  {path: '',component:ListaArticulosComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
