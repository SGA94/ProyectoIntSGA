import { Component,OnInit } from '@angular/core';
import { HeaderService } from 'src/app/servicios/header.servicios';
import { HttpErrorResponse } from '@angular/common/http';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public persona: Persona | undefined;
  public editUsuario: Persona | undefined;

  constructor(private headerService : HeaderService) {}

  ngOnInit(): void {
    this.getUser();
  }
  public getUser():void{
    this.headerService.getUser().subscribe({
      next: (response: Persona) =>{
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
