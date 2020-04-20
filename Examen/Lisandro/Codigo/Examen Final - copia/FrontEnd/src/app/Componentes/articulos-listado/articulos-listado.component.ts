import { Component, OnInit, HostBinding } from '@angular/core';
import{ArticulosService} from '../../Servicios/articulos.service'
@Component({
  selector: 'app-articulos-listado',
  templateUrl: './articulos-listado.component.html',
  styleUrls: ['./articulos-listado.component.css']
})
export class ArticulosListadoComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  Articulos: any = [];
  constructor(private  articuloservicio:ArticulosService) { }

  ngOnInit(): void {
this.ObtenerArticulos();    

  }
  ObtenerArticulos(){
    this.articuloservicio.ObtenerArticulos().subscribe(
      res=>{
       this.Articulos = res;
      },
      err=>console.log(err)
    );

    
  }

  BorrarArticulo(Nombre : string){
    console.log(Nombre)
    this.articuloservicio.Eliminar(Nombre).subscribe(
   res=>{
     console.log(res)
      this.ObtenerArticulos();
    },err => console.log(err)

    )
  }



}
