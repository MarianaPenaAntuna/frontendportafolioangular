import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/servicios/ui.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header-experiencia',
  templateUrl: './header-experiencia.component.html',
  styleUrls: ['./header-experiencia.component.css']
})
export class HeaderExperienciaComponent implements OnInit {

showAddExp:boolean = false;
subscription? : Subscription;


  constructor(
    private uiService : UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddExp=value)
   }

  ngOnInit(): void {
  }

toggleAddExp(){
  console.log("toogle add exp funciona boton")
  this.uiService.toggleAddExp()
}

}
