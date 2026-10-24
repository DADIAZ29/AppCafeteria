export interface Usuario {
  id?: number | string;
  email: string;
  nombre: string;
  rol: 'admin' | 'standard';
}