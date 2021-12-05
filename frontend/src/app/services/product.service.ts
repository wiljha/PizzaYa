import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { Subject } from 'rxjs';
import { Producto } from '../models/producto.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

//const url = environment.apiUrl + '/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //variable que retornar
  url="http://localhost:3000/api/producto";

  productos: Producto[] = [];
  productUpdated = new Subject<Producto[]>();

  constructor(private router: Router, private http: HttpClient) { }

  addProduct(product:Producto){
    //mandar la peticion
    console.log(product);
    const productData = new FormData();
    productData.append('nombre', product.nombre);
    productData.append('descripcion', product.descripcion);
    productData.append('precio', product.precio);
    console.log(productData);

    this.http.post<{message: string}>(this.url, product).subscribe((response) => {
      console.log(response);
      this.productos.push(product);
      // Generar notificación  de actualización a los componentes suscritos al Subject
      this.productUpdated.next([...this.productos]);
      this.router.navigate(['/']);
    });
  }

  //OJO cada vez que abramos la ruta raiz "http://localhost:4200" en el archivo app-routing.module.ts renderiza a PostListComponent, cuando carga
  //PostListComponent en la funcion ngOnInit llamamos al método getProducto y ese método está aqui abajo generando la petición
  //entonces cada vez que cargamos la pagina principal eso se va a ejecutar
  getProductos() {
    //peticion en imsomnia como se hace en Angular. Retorna un Producto
    //envio de la peticion. subscribe
    this.http
    .get<any>(this.url)
    .pipe(
      map( (productosData) => {
        return productosData.map(
          (porducto: {
            _id: string;
            nombre: string;
            descripcion: string;
            precio: string;
           }) =>{
             return {
               id: porducto._id,
               nombre: porducto.nombre,
               precio: porducto.precio,
               descripcion: porducto.descripcion,

             };
           }
         );
        })
      )
      .subscribe((response) =>{
      //cuando responde el backend tenemos un console.log de la peticion que realizamos y obtenemos la respuesta en la consola de desarrollo del navegador
      console.log(response);
      this.productos = response;
      this.productUpdated.next([...this.productos]);



    });
    //return [...this.productos]
  }

  deleteProducto(id: string){
    this.http.delete(`${this.url}/${id}`).subscribe((Response) =>{
    console.log(Response);
    const productosFiltered =  this.productos.filter(producto => producto.id != id);
    this.productos = productosFiltered;
    this.productUpdated.next([...this.productos]);

    });
  }

  updateProducto(producto: Producto, id: string){
    this.http.put(`${this.url}/${id}`,producto).subscribe((Response)=>{
      const newProducto = [...this.productos];
      const oldProductIndex = newProducto.findIndex((producto) => producto.id === id);
      newProducto[oldProductIndex] = producto;
      this.productUpdated.next([...this.productos]);
      this.router.navigate(['/']);
    });
  }

  getProducto(id:string){
    return this.http.get<{_id:string, nombre:string, descripcion:string, precio:string}>(`${this.url}/${id}`);
  }

  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }




}
