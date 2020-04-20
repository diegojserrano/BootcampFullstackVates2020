import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../struct/compra';
import { Articulo } from './../struct/articulo';
import { CompraArticulo } from './../struct/compra-articulo';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
    private url: string = 'http://localhost:8000/compras';

  constructor(private http: HttpClient) { }

  lista: Compra [] = []
  inventario: Articulo [] = []
  totalConsulta: CompraArticulo [] = []

  async consultarC() {
    try {
    this.lista = await this.http.get<Compra[]>(this.url).toPromise()
    }
    catch (err) {

      console.log(err)
    }
  }

  async consultarA() {
    try {
    this.inventario = await this.http.get<Articulo[]>(this.url).toPromise()
    }
    catch (err) {

      console.log(err)
    }
  }

  async consultar_CompArtic() {
    try {
    this.totalConsulta = await this.http.get<CompraArticulo[]>(this.url + '/listadoCompras').toPromise()
    }
    catch (err) {

      console.log(err)
    }
  }

  async agregarComp(nueva: Compra) {
    if (nueva) {
      //console.log(nueva)
        nueva.idCompra = 0;
        try {
          await this.http.post(this.url + '/nuevaCompra',`idArticulo=${nueva.idArticulo}, cantidad=${nueva.cantidad}`,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}}).toPromise()
          this.consultarC()
          return true
        }
        catch (error) {
          console.log(error)
        }
      }
      return false
  }

  async agregarArt(nuevo: Articulo) {
    if (nuevo) {
      //console.log(nueva)
        nuevo.idArticulo = 0;
        try {
          await this.http.post(this.url + '/nuevoArticulo',`nombre=${nuevo.nombre}, precio=${nuevo.precio}`,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}}).toPromise()
          this.consultarA()
          return true
        }
        catch (error) {
          console.log(error)
        }
      }
      return false
  }

  async consultReporte() {
    try {
    this.lista = await this.http.get<Compra[]>(this.url + '/reporte').toPromise()
    }
    catch (err) {

      console.log(err)
    }
  }

  async borrar(p: Compra) {
    if (p) {
      try {
        await this.http.delete(`${this.url}/${p.idCompra}`).toPromise()
        this.consultarC()
        return true
      }
      catch (error) {
        console.log(error)
      }
    }
    return false
  }      
}