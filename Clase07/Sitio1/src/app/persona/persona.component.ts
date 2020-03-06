import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

   id: number = 2
   nombre: string = "Juan Perez"


   constructor() { }

  ngOnInit(): void {
    
  }

  limpiar() {
    this.id = 0
    this.nombre = "No especificado"
  }
}
