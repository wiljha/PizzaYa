import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  content: string = "hola a todos";
  texto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showText(){
    this.content = this.texto
  }

}
