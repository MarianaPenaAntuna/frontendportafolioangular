import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
textdemierda : string =""
  cambiaTexto(textdemierda: string): void {
    this.textdemierda = textdemierda;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
