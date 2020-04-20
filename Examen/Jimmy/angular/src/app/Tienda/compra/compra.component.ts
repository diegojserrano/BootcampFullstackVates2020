import { ServicioService } from './../../Servicio/servicio.service';
import { Articulo } from './../../Modelo/articulo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Modelo/compra';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  
 articulo:Articulo;  
 articulos:Articulo[];
  constructor(private service: ServicioService, private router:Router) { }
  
  seleccionado:Compra;
  
  ngOnInit() {
    this.service.getArticulo()
    .subscribe( articulos => {
        this.articulos=articulos;
    } )
  }
  
  Guardar()
  {    
    this.service.postCompra(this.seleccionado)
    .subscribe(data=>{            
      this.router.navigate(["listado"]);
    })
    
  }

}
