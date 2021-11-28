import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
//import { EventEmitter } from 'stream';
import { Producto } from '../models/producto.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  content: string = 'hola a todos';
  texto: string = '';
  errorMessage = 'Este campo es requerido';



  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  showText(){
    this.content = this.texto
  }

  addProducto(form:NgForm){
    if(form.valid){
      this.productService.addProduct(form.value);
      form.resetForm();
    }

  }

  getErrorMessage(){
    return this.errorMessage;
  }

}
