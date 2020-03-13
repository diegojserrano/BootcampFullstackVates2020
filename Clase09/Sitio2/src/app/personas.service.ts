import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HistorialService } from './historial.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url: string = 'http://localhost:8000/personas';

  constructor(private historial: HistorialService, private http: HttpClient) { }

  plantel: Persona[] = []

  async consultar() {
      this.plantel = await this.http.get<Persona[]>(this.url).toPromise()
  }
  
  agregar(nueva: Persona) {
    if (nueva) {

      this.plantel.push(nueva)
      this.historial.agregar(`Agrega la persona ${nueva.nombre}`)
    }
  }  

 async borrar(p: Persona) {
    if (p) {
      try {
        await this.http.delete(`${this.url}/${p.id}`).toPromise()
        this.historial.agregar(`Borra la persona ${p.nombre}`)
        this.consultar()
        return true
      }
      catch (error) {
        console.log("Volvio un " + error.status)
      }
    }
    return false
  }
}
