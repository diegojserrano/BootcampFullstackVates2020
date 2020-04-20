import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  API_URI = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  ObtenerCompras() {
    return this.http.get(`${this.API_URI}/Compras`)
   }

   reporte(){
        
    return this.http.get(`${this.API_URI}/Compras/Reporte`)


}
   
   Eliminar(id:number){
     console.log("ATENTO AL DATO" + id)
    return this.http.delete(`${this.API_URI}/Compras/${id}`)
  }

  GuardarComprass(IdArticulo:number,Cantidad:number) {

      return this.http.post(`${this.API_URI}/Compras`,`IdArticulo=${IdArticulo}&Cantidad=${Cantidad}  `,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}})

}
ObtenerUnaCompra(id:number){
  return this.http.get(`${this.API_URI}/Compras/${id}`)

}
}
