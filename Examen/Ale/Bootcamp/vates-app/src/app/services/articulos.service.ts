import { Injectable } from '@angular/core';
import { Articulos } from '../models/articulos';
import {  ComprasArti } from '../models/ComprasArti';
import {  Compras } from '../models/compras';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private url: string = 'http://localhost:2424/api';

  constructor(private http: HttpClient) { }

  plantel: Articulos[] = []

  comprasTotal: ComprasArti[] = []

  compra: Compras[] = []

  compraArti: ComprasArti[] = []

  async consultar() {
      try {
     // this.plantel = await this.http.get<Articulos[]>(this.url).toPromise()

     this.plantel = await this.http.get<Articulos[]>(this.url).toPromise();
      }
      catch (err) {
        console.log(err)
      }

  }
  async agregar(nuevo: Articulos) {
        try {
          await this.http.post(this.url + '/agregarArticulo',`nombre=${nuevo.nombre}&precio=${nuevo.precio}`,
          { headers: {"Content-Type": "application/x-www-form-urlencoded"}}).toPromise()
          return true
        }
        catch (error) {
          console.log(error)

          console.log(`nombre=${nuevo.nombre}  precio=${nuevo.precio}`);
        }

  }  


  async consultarComprasArti() {
    try {
   
   this.comprasTotal = await this.http.get<ComprasArti[]>(this.url + '/listadoTotal').toPromise();
    }
    catch (err) {
      console.log(err)
    }

}
async agregarCompra(comp: number,articulos: number ) {
  try {
    await this.http.post(this.url + '/nuevaCompra',`IdArticulo=${articulos}&Cantidad=${comp}`,
    { headers: {"Content-Type": "application/x-www-form-urlencoded"}}).toPromise()
    console.log('Se cargo correctamente');
    console.log(articulos);
    console.log(comp);
    return true
  }
  catch (error) {
    console.log(error)
  }

}  


async report() {
  try {
       this.compraArti = await this.http.get<ComprasArti[]>(this.url + '/reporte').toPromise();
  }
  catch (err) {
    console.log(err)
  }

}

}
