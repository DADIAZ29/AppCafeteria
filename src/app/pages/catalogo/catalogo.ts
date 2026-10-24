import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, ProductCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit{

  private productoService = inject(ProductoService);
  
  productos = signal<Producto[]>([]);

  ngOnInit() {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  manejarCompra(producto: Producto) {
    alert(`Seleccionaste: ${producto.nombre}`);
  }
}
