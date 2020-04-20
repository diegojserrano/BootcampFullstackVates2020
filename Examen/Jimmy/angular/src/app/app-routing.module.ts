import { FaturadoComponent } from './Tienda/faturado/faturado.component';
import { ListadoComponent } from './Tienda/listado/listado.component';
import { CompraComponent } from './Tienda/compra/compra.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoArticuloComponent } from './Tienda/listado-articulo/listado-articulo.component';


const routes: Routes = [

  {path:'listado', component:ListadoComponent},
  {path:'compra',component:CompraComponent},
  {path:'listadoAticulo',component:ListadoArticuloComponent},
  {path:'facturado',component:FaturadoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
