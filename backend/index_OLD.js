//importación del módulo express bajo el alias express
const express = require('express')
//genera una nueva instancia de express
const app = express()
//define en una constante el numero del puerto sobre el que se va a ejecutar el servidor
const port = 3000

//  **diccionario {va la propiedad}, es una constante de javascript para probar**
const posts = [
  {
    title: "Primer Post",
    summary: "Esto es un Post",
    content: "nuestro primer post desde el servidor 1"
  },
  {
    title: "Segundo Post",
    summary: "Esto es un Post",
    content: "felicitaciones"
  }
];
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//la aplicación va a escuchar la peticion de tipo GET en la ruta / raiz, y una funcion ANONIMA que recive 2 parametros el req request y res response. El response
//da como respuesta Hello World
//Cuando cargamos la ruta en el navegador se ejecuta un GET y muestra el response Hello World!
app.get('/', (req, res) => {
  res.send('Bienvenido a PizzaYa!');
})

//  **Debería retornar los post almacenados**, cuando llega peticiones a /api/posts, se envía un response utilzando un JSON
//  **el JSON envía los posts, al response se le indica también un código de respuesta además del contenido que se envía
app.get('/api/posts', (req, res) => {
  res.status(200).json(posts);
})

// **Método HTTP POST para registrar nuevo post en memoria
//
app.post("/api/posts", (req, res) => {
  //mostrar en consola lo que envían
  console.log(req.body);
  //a la constante posts le agrega lo que llegó
  posts.push(req.body);
  //respuesta 201 que es código de creado
  res.status(201).json("post creado");
})

//app es una instancia de express, se ejecuta un metodo listen, recibe el puerto 3000 y una función ANONIMA que es una funcion que es codigo de un contenido
//él se queda escuchando, si hago cambios debo detenerlo "control c"  y correr node index.js, actualizando el navegador para enviar un GET
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


console.log("hola PizzaYa");