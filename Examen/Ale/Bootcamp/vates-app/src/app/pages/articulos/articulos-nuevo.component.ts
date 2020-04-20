import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Articulos } from '../../models/articulos';    


@Component({
  selector: 'app-articulos-nuevo',
  templateUrl: './articulos-nuevo.component.html',
  styles: []
})
export class ArticulosNuevoComponent implements OnInit {

  constructor(public articulo: ArticulosService) {

   }

  ngOnInit(): void {
  }
 

  campo: Articulos = new Articulos()






  agregar() {

    console.log(this.campo);
    this.articulo.agregar(this.campo)


    this.campo.nombre = "";
    this.campo.precio = 0;
  }

}
