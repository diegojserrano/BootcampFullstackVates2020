import { Component, OnInit, HostBinding } from '@angular/core';
import { Articulo } from 'src/app/Modelos/Articulos';
import{ArticulosService} from '../../Servicios/articulos.service'
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-articulos-form',
  templateUrl: './articulos-form.component.html',
  styleUrls: ['./articulos-form.component.css']
})
export class ArticulosFormComponent implements OnInit {

  @HostBinding('class') clases= 'row'

  articulo : Articulo ={
    IdArticulo : 0 ,
    Nombre: ' ',
    Precio : 0

  };
  editar : boolean = false;
  constructor(private articuloservicio:ArticulosService, private router:Router,private rutaactiva:ActivatedRoute) { }

  ngOnInit(): void {
   const params = this.rutaactiva.snapshot.params; 
   console.log("PARAMETRO"+params.IdArticulo)   
   if(params.IdArticulo)  {               
             this.articuloservicio.ObtenetUnArticulo(params.IdArticulo).subscribe(
               res=>{

                     console.log(res);
                     this.articulo = res;            
                     this.editar = true;
              
                 
               }
               ,
               err=>  console.log(err)


             );

   }


 }

  GuardarArticuloNuevo(){
     this.articuloservicio.GuardarArticulo(this.articulo.Nombre,this.articulo.Precio).subscribe(
      res=>{
            console.log(res);
       
      },
      err=>console.log(err)
    );;
    this.router.navigate(['/Articulos']);
    


  }

  ActualizarJuego(){
     this.articuloservicio.Actualizar(this.articulo.IdArticulo,this.articulo).subscribe(
     res => {
           console.log("respuesta" + res);
           this.router.navigate(['/Articulos'])
     },
     err=> console.log(err)

     )

  }
}
