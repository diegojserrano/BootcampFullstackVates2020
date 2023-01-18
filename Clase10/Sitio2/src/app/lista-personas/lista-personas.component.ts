import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona'
import { ContadorService } from "../contador-service"
import { HistorialService } from '../historial.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  constructor(private contador: ContadorService, 
    private historial: HistorialService,
    public personas: PersonasService) {
    this.creando = false
  }

  async ngOnInit() {
    await this.personas.consultar()
  }

  seleccionada: Persona
  creando: boolean

  editar(p) {
    this.seleccionada = p;
    this.creando = false
    this.contador.contar()
    this.historial.agregar(`Inicia edición de la persona ${p.nombre}`)
  }

  async borrar(p) {
    let resultado = await this.personas.borrar(p)
    this.historial.agregar(`Resultado del borrado: ${resultado}`)
  }

  crear_nueva() {
    this.creando = true
    this.seleccionada = new Persona()
  }

  agregar() {
    this.personas.agregar(this.seleccionada)
    this.seleccionada = new Persona() 
  }

  modificar() {
    this.personas.modificar(this.seleccionada)
  } 
  
  cancelar() {
    this.seleccionada = null
    this.creando = false
  }

  get cantidadClicks() {
     return this.contador.cantidad
  }


}
