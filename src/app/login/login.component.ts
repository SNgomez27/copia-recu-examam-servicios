import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario enviado con éxito', this.loginForm.value);

      this.goPagPrincipal();
    } else {
      console.log('Formulario no válido');
    }
  }

  goPagPrincipal() {
    console.log('Redirigiendo a la página principal...');
    this.router.navigate(['/alumnos']);
  }

}

