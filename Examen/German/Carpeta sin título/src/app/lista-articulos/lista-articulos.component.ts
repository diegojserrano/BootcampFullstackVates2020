import { Component, OnInit } from '@angular/core';
import {Articulos} from '../articulos';
import {ServiceArtService} from '../service-art/service-art.service';
  import { from } from 'rxjs';


@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  constructor(public articulos: ServiceArtService) {
  
   }

  async ngOnInit(){
    await this.articulos.consulta()
  }

}
