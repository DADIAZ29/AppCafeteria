import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  seleccionarRol(rol: 'admin' | 'standard') {
    this.authService.cambiarRol(rol);
    this.router.navigate(['/catalogo']);
  }

}
