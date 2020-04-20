import { ServicioService } from './../../Servicio/servicio.service';
import { Compra } from 'src/app/Modelo/compra';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faturado',
  templateUrl: './faturado.component.html',
  styleUrls: ['./faturado.component.css']
})
export class FaturadoComponent implements OnInit {

  facturado:Compra[];
  constructor(private servicio: ServicioService, private router:Router) { }

  ngOnInit() {
    this.servicio.getFacturado()
    .subscribe(listaArticulo =>{
      this.facturado=listaArticulo;
    }); 
  }

}
