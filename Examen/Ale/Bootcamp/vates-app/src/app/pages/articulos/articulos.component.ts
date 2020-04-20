import { Component, OnInit } from '@angular/core';
import { Articulos } from '../../models/articulos';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(public articulo: ArticulosService) { 

    

  }

   async ngOnInit() {
     await this.articulo.consultar();
     
  }
}
