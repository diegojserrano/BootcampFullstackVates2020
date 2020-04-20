import { Component, OnInit } from '@angular/core';
import { ServiceArtService } from '../service-art/service-art.service';
import { Articulos } from '../articulos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  nueva:any ={
    nombre:'',
    precio:0 
  }

  constructor(private service: ServiceArtService) {}

  ngOnInit(){
  }

  agregar(){
    this.service.Agregar(this.nueva);
    this.nueva = new Articulos();
    this.nueva.nombre='';
    this.nueva.precio=0;
  }


}
