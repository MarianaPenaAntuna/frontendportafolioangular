import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Experiencia } from '../interfaceExperiencia';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})

export class AddExperienciaComponent implements OnInit {


@Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter()

lugar: string=""
imagen: string =""
puesto: string=""
descripcion: string=""
fecha: string=""
showAddExp: boolean = false;
subscription?: Subscription

  constructor(
    private uiService : UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddExp = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.puesto.length === 0){
      alert("por favor, ingrese un texto!");
      return
    }
    
    const nuevaExperiencia = {
      lugar: this.lugar,
      imagen: this.imagen,
      puesto: this.puesto,
      descripcion: this.descripcion,
      fecha: this.fecha,
      esEdit: false

      
    }

    this.onAddExperiencia.emit(nuevaExperiencia)
  }
}
