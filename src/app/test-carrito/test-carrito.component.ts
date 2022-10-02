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
    console.log(this.carrito.length)
  }
  seleccionarProducto(producto: any) {

    if (this.carrito.length == 0) {

      this.carrito.push({ id: producto.id, cantidad: 0 })
      console.log(this.carrito)
    }
    if (this.carrito.length != 0) {
      this.carrito.find(ele => ele.id == producto.id)
      if (this.carrito.find(ele => ele.id == producto.id) == undefined) {
        this.carrito.push({ id: producto.id, cantidad: 1 })
      } else {
        this.carrito.find(ele => {
          if (ele.id == producto.id) {
            ele.cantidad++
          }
        })
      }
    }
    console.log(this.carrito)
  }


}
