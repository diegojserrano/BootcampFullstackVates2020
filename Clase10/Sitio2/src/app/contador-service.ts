import { Injectable } from '@angular/core'

@Injectable(
{
    providedIn: "root"
}
)
export class ContadorService {

    cantidad: number = 0

    contar() {
        this.cantidad++
    }


    reiniciar() {
        this.cantidad = 0 
    }
}