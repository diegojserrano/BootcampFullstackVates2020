import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { ArticulosFormComponent } from './Componentes/articulos-form/articulos-form.component';
import { ComprasFormComponent } from './Componentes/compras-form/compras-form.component';
import { ArticulosListadoComponent } from './Componentes/articulos-listado/articulos-listado.component';
import {ArticulosService} from './Servicios/articulos.service';
import { AgregarCompraComponent } from './Componentes/agregar-compra/agregar-compra.component';
import { ConsignaReporteComponent } from './Componentes/consigna-reporte/consigna-reporte.component'
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ArticulosFormComponent,
    ComprasFormComponent,
    ArticulosListadoComponent,
    AgregarCompraComponent,
    ConsignaReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ArticulosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
