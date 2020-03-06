import { Component } from '@angular/core';

@Component({  selector: 'app-root', templateUrl: './app.component.html',  styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'Sitio1';
 
  fecha: String = "Hoy es miercoles"

  i : number = 0;


  contar() {
     this.i = this.i + 2;
  }



}


