import { Component } from '@angular/core';
import {Alumnos} from "../services/interfaces/alumnos";
import {EnviarEstadoService} from "../services/enviar-estado.service";

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',
  styleUrl: './alumnos-detail.component.scss'
})
export class AlumnosDetailComponent {
  alumno: Alumnos| null = null;
  constructor(
    private enviarEstadoService: EnviarEstadoService,
  ) {}
  ngOnInit() {
    this.enviarEstadoService.tarea$.subscribe(tarea => {
      this.alumno = tarea;
    })
  }
}
