import { Injectable } from '@angular/core';
import {Alumnos} from "./interfaces/alumnos";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnviarEstadoService {
  tare: BehaviorSubject<Alumnos | null> = new BehaviorSubject<Alumnos | null>(null);
  tarea$: Observable<Alumnos|null> = this.tare.asObservable();
  constructor() { }
  setTarea(item: Alumnos|null){
    this.tare.next(item);
  }
}
