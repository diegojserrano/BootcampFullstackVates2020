import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{Articulo} from '../Modelos/Articulos'
import { ConstantPool } from '@angular/compiler';
import { combinacion } from '../Modelos/Combinacion';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  API_URI = "http://localhost:8000"

  constructor(private http: HttpClient) { }
  compraArti: combinacion[] = []
  ObtenerArticulos() {
   return this.http.get(`${this.API_URI}/Articulos`)
  }

 
  ObtenetUnArticulo(id:number){
    return this.http.get(`${this.API_URI}/Articulos/${id}`)

  }
  Eliminar(Nombre:string){
    return this.http.delete(`${this.API_URI}/Articulos/${Nombre}`)

  }

   GuardarArticulo(nombre:string,precio:number) {
 return this.http.post(`${this.API_URI}/Articulos`,`Precio=${precio}&Nombre=${nombre}  `,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}})

     
  }  ;


  Actualizar(id:number ,ArticuloActualizado: Articulo){
        console.log("buenardo?" + ArticuloActualizado.IdArticulo)
        console.log("Buenardont" + ArticuloActualizado.Nombre)
 
    return this.http.put(`${this.API_URI}/Articulos/`+id,`Precio=${ArticuloActualizado.Precio}&Nombre=${ArticuloActualizado.Nombre}`,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}})
  }

}
