import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private router: Router)
  {
    this.Listado();
  }
  Listado()
  {
     this.router.navigate(["listado"]);     
  }

  Nuevo()
  {
    this.router.navigate(["compra"]);
  }

  ListadoArticulo()
  {
    this.router.navigate(["listadoAticulo"]);
  }

  ListadoFacturado()
  {
    this.router.navigate(["facturado"]);
  }

}
