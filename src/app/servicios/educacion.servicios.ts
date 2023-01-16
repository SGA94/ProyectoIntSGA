import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionServicio {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEducation():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }
  public addEducation(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/add`,educacion);
  }
  public updateEducation(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update`,educacion);
  }
  public deleteEducation(educacionId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${educacionId}`);
  }
}
