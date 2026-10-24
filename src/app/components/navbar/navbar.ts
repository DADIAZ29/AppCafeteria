import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  authService = inject(AuthService);

  usuario = this.authService.usuarioActual;

  cambiarRol(rol: 'admin' | 'standard') {
    this.authService.cambiarRol(rol);
  }

}
