import { Component, OnInit, HostBinding } from '@angular/core';
import { Articulo } from 'src/app/Modelos/Articulos';
import{Compras} from'../../Modelos/Compras'
import{combinacion} from '../../Modelos/Combinacion'
import{ArticulosService} from '../../Servicios/articulos.service'
import{Router,ActivatedRoute} from '@angular/router'
import{ComprasService} from '../../Servicios/compras.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-agregar-compra',
  templateUrl: './agregar-compra.component.html',
  styleUrls: ['./agregar-compra.component.css']
})
export class AgregarCompraComponent implements OnInit {
 @HostBinding('class') clases= 'row'
 compra : Compras = {

IdCompra: 0 ,
IdArticulo: 0,
Cantidad : 0

 }
 articulo : Articulo ={
  IdArticulo : 0 ,
  Nombre: ' ',
  Precio : 0

};

combina3 : combinacion={
    IdArticulo: 0,
    Nombre: '',
    Precio : 0,
    Cantidad: 0,
    IdCompra: 0,
    Total: 0
    


};
  constructor(private articuloservicio:ArticulosService, private router:Router,private rutaactiva:ActivatedRoute,private comprasservicio:ComprasService) { }

  ngOnInit(): void {
    const params = this.rutaactiva.snapshot.params; 
   console.log("PARAMETRO"+params.IdArticulo)   
   if(params.IdArticulo)  {               
             this.articuloservicio.ObtenetUnArticulo(params.IdArticulo).subscribe(
               res=>{
                     console.log(res);
                     this.articulo = res;                
               }
               ,
               err=>  console.log(err)


             )};



  }
  GuardarCompra(){
    console.log("id"+ this.articulo.IdArticulo + "Cantidad" + this.articulo.Precio);
      this.comprasservicio.GuardarComprass(this.articulo.IdArticulo,this.articulo.Precio).subscribe(
      res=>{
            console.log(res);
       
      },
      err=>console.log(err)
    );;
    this.router.navigate(['/Compras']);
  }

}









