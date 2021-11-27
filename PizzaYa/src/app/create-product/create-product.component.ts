import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  content: string = "hola a todos";
  texto: string = "";
  product: Producto [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  showText(){
    this.content = this.texto
  }

  addPost(form:NgForm){
    console.log(form.value.title)
    this.product.push(form.value)
  }

}
