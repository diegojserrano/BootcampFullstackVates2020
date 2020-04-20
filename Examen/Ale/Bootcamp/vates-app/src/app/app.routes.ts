import { RouterModule,Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { ArticulosNuevoComponent } from './pages/articulos/articulos-nuevo.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { CompranuevoComponent } from './pages/compras/compranuevo.component';
import { ReporteComponent } from './pages/reporte/reporte.component';


const appRoutes:  Routes = [
    {
        path: '',
        component: PagesComponent,
        children:[
            {path: 'ListaArticulos', component: ArticulosComponent},
            {path: 'articulosNuevo', component: ArticulosNuevoComponent},
            {path: 'compras', component: ComprasComponent},
            {path: 'comprasNuevo', component: CompranuevoComponent},
            {path: 'reporte', component: ReporteComponent}
        ]
    },
    {path: '**', component: NofoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});