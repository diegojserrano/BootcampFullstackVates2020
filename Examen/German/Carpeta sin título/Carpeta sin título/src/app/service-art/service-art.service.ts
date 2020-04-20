import { Injectable } from '@angular/core';
import {Articulos} from '../articulos';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceArtService {

  private url: string = 'http://localhost:8002/articulos';

  constructor(private http:HttpClient) { }

  catalogo: Articulos[] = []

  async consulta(){
    this.catalogo = await this.http.get<Articulos[]>(this.url).toPromise()
  }

  async Agregar(nueva:Articulos){
    if(nueva){
      console.log(nueva)
      nueva.IdArticulo = 0;
      try{
        await this.http.post(this.url,`Nombre=${nueva.Nombre}, Precio=${nueva.Precio}`,
        { headers:{"Content-Type": "application/x-www-form-urlencoded"}}).toPromise()
        this.consulta()
        return true
      }
      catch(error){
        console.log(error)
      }
      return false
    }
  }
}

