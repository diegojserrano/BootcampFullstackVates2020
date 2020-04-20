import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { PagesComponent } from './pages/pages.component';


import { APP_ROUTES } from './app.routes';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { CompranuevoComponent } from './pages/compras/compranuevo.component';
import { ArticulosNuevoComponent } from './pages/articulos/articulos-nuevo.component';

import { FormsModule } from '@angular/forms';
import { ReporteComponent } from './pages/reporte/reporte.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PrincipalComponent,
    ArticulosComponent,
    ComprasComponent,
    PagesComponent,
    NofoundComponent,
    CompranuevoComponent,
    ArticulosNuevoComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
