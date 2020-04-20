import { Component, OnInit } from '@angular/core';
import { Compra } from '../../struct/compra';
import { CompraService } from '../../services/compra.service';

@Component({
  selector: 'app-nueva-compra',
  templateUrl: './nueva-compra.component.html',
  styleUrls: ['./nueva-compra.component.css']
})
export class NuevaCompraComponent implements OnInit {

  constructor(public compras: CompraService) { }

  async ngOnInit() {
    await this.compras.consultarC()
  }

  lista: Compra
  creando: boolean

  crear_nueva() {
    this.creando = true
    this.lista = new Compra()
  }

  agregar() {
    this.compras.agregarComp(this.lista)
    this.lista = new Compra() 
  }

  editar(p) {
    this.lista = p;
    this.creando = false
  }

  borrar(p) {
  this.compras.borrar(p)
  }

  cancelar() {
    this.lista = null
    this.creando = false
  }
}



/*
  seleccionada: Compra
  creando: boolean

  editar(p) {
    this.seleccionada = p;
    this.creando = false
  }

  async borrar(p) {
    let resultado = await this.compras.borrar(p)
    return resultado
  }*/