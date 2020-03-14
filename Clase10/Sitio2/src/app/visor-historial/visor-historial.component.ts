import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../historial.service';

@Component({
  selector: 'app-visor-historial',
  templateUrl: './visor-historial.component.html',
  styleUrls: ['./visor-historial.component.css']
})
export class VisorHistorialComponent implements OnInit {

  constructor(private historial: HistorialService) { }

  ngOnInit(): void {
  }

  get todo() {
    return this.historial.lineas
  }
}
