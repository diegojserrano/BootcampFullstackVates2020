import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  tarjetas: Tarjeta[];
  seleccionada: Tarjeta;
  creando: boolean;
  constructor() { }

  ngOnInit() {
    this.tarjetas =[
      {id: 1, nombre: 'Visa'},{id: 2, nombre: 'Master'}
    ];
    this.creando = false;
    //this.seleccionada = this.tarjetas[1];
  }

  click(t: Tarjeta): void{
    this.seleccionada = t;
    this.creando = false;
  }

  eliminar(i: number) {
    this.seleccionada = null; 
    this.tarjetas.splice(i,1);
    this.creando = false;
  }

  nueva() {
    this.seleccionada = new Tarjeta();
    let maximo: number = 0;
    this.tarjetas.forEach(t => {
      if (t.id > maximo) maximo = t.id;
    });
    this.seleccionada.id = maximo + 1;
    this.seleccionada.nombre = "Nueva"
    this.creando = true;
  }

  agregar() {
    this.tarjetas.push(this.seleccionada);
    this.creando = false;
  }

  cancelar() {
    this.seleccionada = null;
    this.creando = false;
  }

}
