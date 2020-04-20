import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {

  constructor(public comprasTotales: CompraService) { }

  async ngOnInit() {
    await this.comprasTotales.consultar_CompArtic()
  }
}


