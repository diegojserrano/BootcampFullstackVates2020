import { Component } from '@angular/core';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sitio2';

  v: number[] = [2,5,6,8,6,3,21,5]

  constructor(private personas: PersonasService) 
  {}

  async consultar() { 
    await this.personas.consultar();
    console.log("Llegaron bien los datos")
  }


}


