import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { AgregarComponent} from './agregar/agregar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaArticulosComponent,
    AgregarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
