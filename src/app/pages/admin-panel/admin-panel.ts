import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-admin-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css',
})
export class AdminPanel implements OnInit{
private productoService = inject(ProductoService);

productos = signal<Producto[]>([]);
  nuevoProducto: Producto = { nombre: '', categoria: '', precio: 0 };
  editandoId: number | string | null = null;

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  guardarProducto() {
    if (this.editandoId) {
      // Actualizar producto existente
      this.productoService.actualizarProducto(this.editandoId, this.nuevoProducto).subscribe(() => {
        this.cargarProductos();
        this.resetForm();
      });
    } else {
      this.productoService.crearProducto(this.nuevoProducto).subscribe(() => {
        this.cargarProductos();
        this.resetForm();
      });
    }
  }

  editarProducto(prod: Producto) {
    this.editandoId = prod.id || null;
    this.nuevoProducto = { ...prod };
  }

  eliminarProducto(id?: number | string) {
    if (!id) return;
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos();
    });
  }

  resetForm() {
    this.editandoId = null;
    this.nuevoProducto = { nombre: '', categoria: '', precio: 0 };
  }


}
