import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

  errorMessage = 'este campo es requerido. ';
  private isEditing = false;
  private productoId!: string;
  producto: Producto={id:"",nombre:"", descripcion:"",precio:""};

  constructor(public productService: ProductService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
if(paramMap.has("productoId")){
  this.isEditing = true;
  this.productoId = paramMap.get('productoId')!;
  this.productService.getProducto(this.productoId).subscribe((productoData) =>{
    this.producto = {id: productoData._id, nombre: productoData.nombre, descripcion:productoData.descripcion, precio: productoData.precio,};
  })
}else{
  this.isEditing = false;
}
    });
  }

  // showText(){
  //   this.content = this.texto
  // }

  saveProducto(form:NgForm){
    if(form.invalid){
      return;
    }

    if(this.isEditing){
      this.productService.updateProducto(form.value,this.productoId)
    }else {
      this.productService.addProduct(form.value);

    }
    form.resetForm();
  }

  getErrorMessage(){
    return this.errorMessage;
  }

}
