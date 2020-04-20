import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { ComprasArti } from 'src/app/models/ComprasArti';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(public service: ArticulosService) { }

  async ngOnInit() {
    await this.service.report();
    
 }

 condicion: number

 



}
