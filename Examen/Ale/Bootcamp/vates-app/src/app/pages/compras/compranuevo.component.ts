import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulos } from '../../models/articulos';   
import { Compras } from '../../models/compras';   

@Component({
  selector: 'app-compranuevo',
  templateUrl: './compranuevo.component.html',
  styleUrls: ['./compranuevo.component.css']
})
export class CompranuevoComponent implements OnInit {

  constructor(public arti: ArticulosService) { }
 
  async ngOnInit() {
    await this.arti.consultar();
 }


  campo: Compras = new Compras()
  articulo:  Articulos = new Articulos();

  agregar() {

    // console.log(typeof(this.articulo.IdArticulo));
    // console.log(typeof(this.campo.cantidad));

     let cant = Number(this.campo.cantidad)

    this.arti.agregarCompra(this.campo.cantidad, this.articulo.IdArticulo)


     this.campo.cantidad = 0;
  }

}
