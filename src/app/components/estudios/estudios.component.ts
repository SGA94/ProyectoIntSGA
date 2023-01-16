import { Component } from '@angular/core';
import { Educacion } from '../../entidades/educacion';
import { HttpErrorResponse } from '@angular/common/http';
import { EducacionServicio } from '../../servicios/educacion.servicios';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {

  public educacion:Educacion[]=[];

  constructor(private educacionServicio:EducacionServicio) {}

  ngOnInit():void {
    this.getEducations();
  }

  public getEducations():void{
    this.educacionServicio.getEducation().subscribe({
      next:(Response: Educacion[]) =>{
        this.educacion=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }

}
