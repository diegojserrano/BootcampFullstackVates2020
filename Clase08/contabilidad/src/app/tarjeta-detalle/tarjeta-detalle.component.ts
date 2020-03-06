import { Component, OnInit, Input, Output } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-tarjeta-detalle',
  templateUrl: './tarjeta-detalle.component.html',
  styleUrls: ['./tarjeta-detalle.component.css']
})
export class TarjetaDetalleComponent implements OnInit {

  @Input() tarjeta: Tarjeta;
  
  constructor() { }

  ngOnInit() {
  }

}
