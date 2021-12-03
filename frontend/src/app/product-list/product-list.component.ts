import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from '../models/producto.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productos: Producto[] = [];
  productsSub: Subscription;

  constructor(public productService: ProductService) {
    this.productsSub = this.productService.getProductUpdateListener().subscribe((productos:Producto[]) => {
      this.productos = productos;
    });
  }

  ngOnInit(): void {
    this.productService.getProductos();
    this.productsSub = this.productService.getProductUpdateListener().subscribe((productos:Producto[]) => {
    this.productos = productos;
    });
  }

  ngOnDestroy():void{

    this.productsSub.unsubscribe();
  }



}
