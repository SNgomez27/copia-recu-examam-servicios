import {Component, OnInit} from '@angular/core';
import {Alumnos} from "../services/interfaces/alumnos";
import {Router} from '@angular/router';
import {EnviarAlumnosService} from "../services/enviar-alumnos.service";
import {EnviarEstadoService} from "../services/enviar-estado.service";

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements  OnInit {
  listas: Alumnos[] = [
    {id: 1, nombre: "Jane", curso: "1",edad:7, aprobado:false},
    {id: 1, nombre: "Juan", curso: "4",edad:10, aprobado:true},
    {id: 1, nombre: "Jorge", curso: "2",edad:8, aprobado:false},
    {id: 1, nombre: "Jael", curso: "5",edad:11, aprobado:true},
    {id: 1, nombre: "Jose", curso: "3",edad:9, aprobado:true},
    {id: 1, nombre: "Jhon", curso: "3",edad:9, aprobado:false},
  ]
  estado: string = "todos"
  constructor(
    private enviarEstadoService: EnviarEstadoService,
    private router: Router,
    private enviarAlumnosService: EnviarAlumnosService
  ) {}
  ngOnInit() {
    this.enviarAlumnosService.estado$.subscribe(value =>{
      this.estado = value;
    })
  }
  enviarDatos(item: Alumnos){
    this.enviarEstadoService.setTarea(item);
    this.router.navigate(['/detallesAlumnos']);
  }

}
