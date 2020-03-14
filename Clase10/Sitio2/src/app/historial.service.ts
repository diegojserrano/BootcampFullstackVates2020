import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  lineas: string[] = []

  constructor() { }

  agregar(linea: string) {
    this.lineas.push(linea)
    console.log(linea)
  }
}
