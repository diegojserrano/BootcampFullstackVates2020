import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HistorialService } from './historial.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url: string = 'http://10.0.0.215:8000/personas';

  constructor(private historial: HistorialService, 
    private http: HttpClient) { }

  plantel: Persona[] = []

  async consultar() {
      this.plantel = await this.http.get<Persona[]>(this.url).toPromise()
  }
  
async agregar(nueva: Persona) {
    if (nueva) {
       console.log(nueva)
        nueva.id = 0;
        try {
          await this.http.post(this.url,`nombre=${nueva.nombre}`,{ headers: {"Content-Type": "application/x-www-form-urlencoded"}}).toPromise()
          this.historial.agregar(`Inserta la persona ${nueva.nombre}`)
          this.consultar()
          return true
        }
        catch (error) {
          console.log(error)
        }
      }
      return false
  
      //this.plantel.push(nueva)
      //this.historial.agregar(`Agrega la persona ${nueva.nombre}`)
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
        console.log(error)
      }
    }
    return false
  }
}
