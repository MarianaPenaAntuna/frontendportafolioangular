import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experiencia } from '../components/interfaceExperiencia';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:5002/experiencia";

  constructor(private http:HttpClient) { }
  

  getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl)
  }

 deleteExperiencia(experiencia:Experiencia):Observable<Experiencia>{
  const url= `${this.apiUrl}/${experiencia.id}`
  return this.http.delete<Experiencia>(url)
 }

 addExperiencia(experiencia: Experiencia): Observable<Experiencia>{
  return this.http.post<Experiencia>(this.apiUrl, experiencia, httpOptions)
 }

 onAddUpdate(experiencia:Experiencia): Observable<Experiencia>{
  const url= `${this.apiUrl}/${experiencia.id}`
  return this.http.put<Experiencia>(url, experiencia, httpOptions) 
}

}
