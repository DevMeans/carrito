import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-test-carrito',
  templateUrl: './test-carrito.component.html',
  styleUrls: ['./test-carrito.component.css']
})
export class TestCarritoComponent implements OnInit {
  carrito: any[] = []
  productos: any[] = [];
  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
    //  console.log(this.carritoService.obtenerCarrito())
    this.productos = this.carritoService.obtenerCarrito()
    console.log(this.productos)
  }
  seleccionarProducto(producto: any) {
    console.log(producto)
    this.carrito.push({ id: producto.id, cantidad: 1 })
  }

} 
