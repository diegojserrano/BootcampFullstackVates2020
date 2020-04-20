import { Component } from '@angular/core';
import {ServiceArtService} from './service-art/service-art.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  constructor(private articulos: ServiceArtService)
  {}

 // async consultar() {
   // await this.articulos.consulta();
    //console.log("Llegaron bien los datos")
  //}
}
