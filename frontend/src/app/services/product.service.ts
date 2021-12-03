import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { Subject } from 'rxjs';
import { Producto } from '../models/producto.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //variable que retornar
  url="http://localhost:3000/api/producto";

  productos: Producto [] = [];
  productUpdated = new Subject<Producto[]>();

  constructor(private router: Router, private http: HttpClient) { }

  addProduct(product:Producto){
    //this.productos.push(product);

    // Generar notificación  de actualización a los componentes suscritos al Subject
    this.productUpdated.next([...this.productos]);
    this.router.navigate(['/']);
  }

  //OJO cada vez que abramos la ruta raiz "http://localhost:4200" en el archivo app-routing.module.ts renderiza a PostListComponent, cuando carga
  //PostListComponent en la funcion ngOnInit llamamos al método getProducto y ese método está aqui abajo generando la petición
  //entonces cada vez que cargamos la pagina principal eso se va a ejecutar
  getProductos() {
    //peticion en imsomnia como se hace en Angular. Retorna un Producto
    //envio de la peticion. subscribe
    this.http.get<Producto[]>(this.url).subscribe((response) =>{
      //cuando responde el backend tenemos un console.log de la peticion que realizamos y obtenemos la respuesta en la consola de desarrollo del navegador
      console.log(response);
      this.productos = response;
      this.productUpdated.next([...this.productos]);

    });
    //return [...this.productos]
  }

  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }




}
