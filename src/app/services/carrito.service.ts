import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CarritoService {
  baseDeDatos = [
    {
      id: 1,
      nombre: 'manzana',
      precio: 1,
      imagen: 'manzana.jpg'
    },
    {
      id: 2,
      nombre: 'mar',
      precio: 1.2,
      imagen: 'mar.jpg'
    },
    {
      id: 3,
      nombre: 'perro',
      precio: 2.1,
      imagen: 'perro.jpg'
    },
    {
      id: 4,
      nombre: 'waifu',
      precio: 0.6,
      imagen: 'waifu.jpg'
    },
    {
      id: 5,
      nombre: 'zorrito',
      precio: 0.6,
      imagen: 'zorrito.jpg'
    }

  ];
  constructor() { }
  obtenerCarrito(){

    return this.baseDeDatos
  }
}
