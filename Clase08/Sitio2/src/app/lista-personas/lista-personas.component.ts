import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona'

@Component({

  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  constructor() {
    this.creando = false
   }

  ngOnInit(): void {
  }



  plantel: Persona[] = [ 
    { id: 4, nombre: "Juan" }, 
    { id: 5, nombre: "Ana" }, 
    { id: 2, nombre:"Jorge" } 
  ]

  seleccionada: Persona
  creando: boolean

  editar(p) {
    this.seleccionada = p;
    this.creando = false
  }

  borrar(p) {
    let posicion = this.plantel.indexOf(p)
    this.plantel.splice(posicion,1)
  }

  crear_nueva() {
    this.creando = true
    this.seleccionada = new Persona()
  }

  agregar() {
    // Antes del push validar con un if
     this.plantel.push(this.seleccionada)
     this.seleccionada = new Persona() 
  }

  cancelar() {
    this.seleccionada = null
    this.creando = false
  }
}
