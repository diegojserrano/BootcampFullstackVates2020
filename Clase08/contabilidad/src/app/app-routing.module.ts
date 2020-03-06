import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetasComponent } from './tarjetas/tarjetas.component';


const routes: Routes = [
  { path:'tarjetas', component: TarjetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
