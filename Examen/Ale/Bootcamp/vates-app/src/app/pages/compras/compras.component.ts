import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(public comprasGral: ArticulosService) { }

 async ngOnInit(){
    await this.comprasGral.consultarComprasArti();
  }

}
