import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnviarAlumnosService {
  estado: BehaviorSubject<string> = new BehaviorSubject<string>("");
  estado$: Observable<string> = this.estado.asObservable();

  constructor() {
  }
  setEstado(dato: string){
    this.estado.next(dato);
  }
}
