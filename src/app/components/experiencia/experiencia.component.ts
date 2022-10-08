import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from '../interfaceExperiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any
  experiencias: Experiencia[]= []

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getExperiencias().subscribe((experiencias)=>
    this.experiencias = experiencias)
    }
    

    deleteExperiencia(experiencia: Experiencia){
    this.portfolioService.deleteExperiencia(experiencia).subscribe(() => 
    this.experiencias = this.experiencias.filter((e)=>e.id!==experiencia.id))
    }


    addExperiencia(experiencia: Experiencia){
      this.portfolioService.addExperiencia(experiencia).subscribe((experiencia) =>
      this.experiencias.push(experiencia))
    }

    onEdit(experiencia: Experiencia){
      experiencia.esEdit= !experiencia.esEdit
    }

    onAddUpdate(experiencia: Experiencia){
      this.portfolioService.onAddUpdate(experiencia).subscribe((experiencia) =>
      this.experiencias.push(experiencia))
    }
}

  

