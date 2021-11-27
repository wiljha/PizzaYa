import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
//import { EventEmitter } from 'stream';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  content: string = "hola a todos";
  texto: string = "";
  @Output() createProducto = new EventEmitter<Producto>();


  constructor() { }

  ngOnInit(): void {
  }

  showText(){
    this.content = this.texto
  }

  addProducto(form:NgForm){
    if(form.valid){
      this.createProducto.emit(form.value)
      form.resetForm();
    }

  }

}
