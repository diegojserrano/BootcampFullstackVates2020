import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/Servicios/articulos.service';
import { ComprasService } from 'src/app/Servicios/compras.service';
import{Reporte} from'../../Modelos/Reporte'

@Component({
  selector: 'app-consigna-reporte',
  templateUrl: './consigna-reporte.component.html',
  styleUrls: ['./consigna-reporte.component.css']
})
export class ConsignaReporteComponent implements OnInit {
report : Reporte;
color : string = "red";

  constructor(public comprasservicio:ComprasService) { }

  ngOnInit(): void {
 this.obtenerReporte();

  }
  obtenerReporte(){
  this.comprasservicio.reporte() .subscribe(
    res=>{
      console.log(res)
      this.report = res;
     
    },
    err=>console.log(err)
  );
}
}

 


