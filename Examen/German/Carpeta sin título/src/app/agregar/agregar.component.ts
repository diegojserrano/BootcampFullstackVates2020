import { Component, OnInit } from '@angular/core';
import { ServiceArtService } from '../service-art/service-art.service';
import { Articulos } from '../articulos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(public articulo: ServiceArtService) { }

  ngOnInit(): void {
  }
  seleccionada: Articulos
  creando: boolean

  agregar() {
    this.articulo.agregar(this.seleccionada)
    this.seleccionada = new Articulos()
  }
  crear(){
    this.creando = true
    this.seleccionada = new Articulos()
  }
  cancelar() {
    this.seleccionada = null
    this.creando = false
  }

}
