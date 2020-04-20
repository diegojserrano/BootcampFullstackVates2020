import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ArticulosListadoComponent} from './Componentes/articulos-listado/articulos-listado.component'
import {ArticulosFormComponent} from './Componentes/articulos-form/articulos-form.component'
import { ComprasFormComponent } from './Componentes/compras-form/compras-form.component';
import {AgregarCompraComponent} from './Componentes/agregar-compra/agregar-compra.component'
import {ConsignaReporteComponent} from'./Componentes/consigna-reporte/consigna-reporte.component'
  import { from } from 'rxjs';
const routes: Routes = [
{
path:'',
redirectTo: '/Articulos',
pathMatch: 'full'
},
{
path:'Articulos',
component: ArticulosListadoComponent

},
{
path:'Articulos/Agregar',
component:ArticulosFormComponent

},

{
path:'Articulos/Editar/:IdArticulo',
component: ArticulosFormComponent


},{
path:'Compras',
component: ComprasFormComponent
},
{
path:'Compras/Agregar/:IdArticulo',
component: AgregarCompraComponent

},
{
path:'Compras/Editar/:IdCompra',
component:AgregarCompraComponent

},
{
path:'Reporte',
component:ConsignaReporteComponent


}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
