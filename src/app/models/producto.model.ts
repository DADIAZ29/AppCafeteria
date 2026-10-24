export interface Producto {
  id?: number | string;
  nombre: string;
  categoria: string;
  precio: number;
  disponible?: boolean;
  imagenUrl?: string;
}