import { ServicioService } from './Servicio/servicio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Tienda/listado/listado.component';
import { CompraComponent } from './Tienda/compra/compra.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoArticuloComponent } from './Tienda/listado-articulo/listado-articulo.component';
import { FaturadoComponent } from './Tienda/faturado/faturado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CompraComponent,
    ListadoArticuloComponent,
    FaturadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
