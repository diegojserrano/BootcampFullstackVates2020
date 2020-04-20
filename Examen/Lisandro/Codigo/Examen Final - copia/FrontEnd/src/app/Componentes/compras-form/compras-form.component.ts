import { Component, OnInit, HostBinding } from '@angular/core';
import{ComprasService} from '../../Servicios/compras.service'
import { ArticulosService } from 'src/app/Servicios/articulos.service';
import { Compras } from 'src/app/Modelos/Compras';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compras-form',
  templateUrl: './compras-form.component.html',
  styleUrls: ['./compras-form.component.css']
})
export class ComprasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  Compras: any = [];
  Articulos: any = [];
  Acumulador:number= 0;




  constructor(private comrpasservice : ComprasService, private articulosservicio: ArticulosService,private cdRef:ChangeDetectorRef,private router:Router) { }

  ngOnInit(): void {
    this.ObtenerCompras();  
  
  

    
  }
  ObtenerCompras(){
    this.comrpasservice.ObtenerCompras().subscribe(
      res=>{
        console.log(res)
       this.Compras = res;
      },
      err=>console.log(err)
    );
  }
  

  BorrarCompra(id:number){
    console.log(id);
    this.comrpasservice.Eliminar(id).subscribe(
   res=>{
     console.log(res)
      this.ObtenerCompras();
    },err => console.log(err)

    )
  }

  ModificarCompra(){
alert("Works")

  }

}

