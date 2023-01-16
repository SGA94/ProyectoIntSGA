import { Component } from '@angular/core';
import { Education } from '../../models/education';
import { EducationService } from 'src/app/servicios/education.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {

  public educations:Education[]=[];

  constructor(private educationService:EducationService) {}

  ngOnInit():void {
    this.getEducations();
  }

  public getEducations():void{
    this.educationService.getEducation().subscribe({
      next:(Response: Education[]) =>{
        this.educations=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }

}
