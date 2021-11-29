import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { Subject } from 'rxjs';
import { Producto } from '../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productos: Producto [] = [];
  productUpdated = new Subject<Producto[]>();

  constructor(private router: Router) { }

  addProduct(product:Producto){

    this.productos.push(product);

    // Generar notificación  de actualización a los componentes suscritos al Subject
    this.productUpdated.next([...this.productos]);
    this.router.navigate(['/']);
  }

  getProductos() {
    return [...this.productos]
  }

  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }
}
