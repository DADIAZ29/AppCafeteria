import { Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioActualSignal = signal<Usuario>({
    id: 1,
    email: 'admin@pichincha.com',
    nombre: 'Darwin Diaz',
    rol: 'admin'
  });

  get usuarioActual() {
    return this.usuarioActualSignal.asReadonly();
  }

  cambiarRol(nuevoRol: 'admin' | 'standard') {
    if (nuevoRol === 'admin') {
      this.usuarioActualSignal.set({
        id: 1,
        email: 'admin@pichincha.com',
        nombre: 'Darwin Diaz',
        rol: 'admin'
      });
    } else {
      this.usuarioActualSignal.set({
        id: 2,
        email: 'usuario@gmail.com',
        nombre: 'Carolina Cueva',
        rol: 'standard'
      });
    }
  }

  isAdmin(): boolean {
    return this.usuarioActualSignal().rol === 'admin';
  }
}