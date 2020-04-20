import { ServicioService } from './../../Servicio/servicio.service';
import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/Modelo/compra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  compra:Compra[];
 
  /*compra:Compra[]=[{id:1,idArticulo:1,nombre:'Pan',cantidad:2,precio:10,total:20},
                  {id:2,idArticulo:2,nombre:'Coca cola',cantidad:2,precio:90,total:180},
                  {id:3,idArticulo:3,nombre:'Galleta',cantidad:1,precio:35,total:35}];
  */
  constructor(private servicio: ServicioService, private router:Router) { }



   ngOnInit() {

    this.servicio.getCompra()
    .subscribe(listaCompra =>{
      this.compra=listaCompra;
    }); 
  }

   

}
