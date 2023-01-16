import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;
 
  constructor(private http: HttpClient) { }

  public getUser():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/persona/id/1`);
  }

  public updatePersona(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/update`,persona);
  }
}
