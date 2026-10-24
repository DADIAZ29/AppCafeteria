import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() producto!: Producto;
  @Output() onComprar = new EventEmitter<Producto>();

  comprar() {
    this.onComprar.emit(this.producto);
  }
}
