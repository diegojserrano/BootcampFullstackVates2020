import { Compra } from './../Modelo/compra';
import { Articulo } from './../Modelo/articulo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8000/compras';

  getArticulo()
  {
    return this.http.get<Articulo[]>(this.url + '/articulo');
  }

  getListadoArticulo()
  {
    return this.http.get<Compra[]>(this.url + '/articulosPorVentas');
  }

  getFacturado()
  {
    return this.http.get<Compra[]>(this.url + '/totalFacturados');
  }

  getCompra()
  {
    return this.http.get<Compra[]>(this.url);
  }

  postCompra(compra:Compra)
  {
    return this.http.post<Compra>(this.url,compra);
  }

  
 
}
