import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedProducts: Producto [] = [];
  title = 'PizzaYa';

  saveProducto(product:Producto){
    this.storedProducts.push(product);
  }
}
