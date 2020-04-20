import { Compra } from 'src/app/Modelo/compra';

import { ServicioService } from './../../Servicio/servicio.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-articulo',
  templateUrl: './listado-articulo.component.html',
  styleUrls: ['./listado-articulo.component.css']
})
export class ListadoArticuloComponent implements OnInit {

  articulo:Compra[];
  constructor(private servicio: ServicioService, private router:Router) { }

  ngOnInit() {

    this.servicio.getListadoArticulo()
    .subscribe(listaArticulo =>{
      this.articulo=listaArticulo;

  })
}

  

}
