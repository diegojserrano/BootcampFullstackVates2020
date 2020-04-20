import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
//import { ArticulosComponent } from './articulos/articulos.component';
//import { ComprasComponent } from './compras/compras.component';
import { ListarComprasComponent } from './component/listar-compras/listar-compras.component';
import { NuevaCompraComponent } from './component/nueva-compra/nueva-compra.component';

@NgModule({
  declarations: [
    AppComponent,
   // ArticulosComponent,
   // ComprasComponent,
    ListarComprasComponent,
    NuevaCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
