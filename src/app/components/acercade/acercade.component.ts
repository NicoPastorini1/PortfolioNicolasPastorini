import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  expe: Experiencia[] = [];

  persona: persona = new persona("", "", "");

  constructor(public personaService: PersonaService, private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.personaService.getPersona().subscribe(data =>{this.persona = data})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data =>{this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
