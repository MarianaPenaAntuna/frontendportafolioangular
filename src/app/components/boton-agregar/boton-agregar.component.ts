import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {

  @Input() text: string = "";
@Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

onClick(){
  this.btnClick.emit();
}

}
