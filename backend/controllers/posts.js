//const producto = require("../models/producto");
//modelo se importa, el nombre de la importación es Producto
const Producto = require("../models/producto");

//const posts = [
//    {
//      title: "Primer Post",
//      summary: "Esto es un Post",
//      content: "nuestro primer post desde el servidor"
//    },
//    {
//      title: "Segundo Post",
//      summary: "Esto es un Post",
//      content: "felicitaciones"
//    }
//  ];

exports.getMessage = (req, res) => {
    res.send('Bienvenido a PizzaYa!');
  };

  //  **Debería retornar los post almacenados**, cuando llega peticiones a /api/posts, se envía un response utilzando un JSON
//  **el JSON envía los posts, al response se le indica también un código de respuesta además del contenido que se envía


exports.getProducto = (req, res) => {
  //console.log("entró a la funcion getProducto");
  //res.status(200).json("trabajando");
  Producto.find({nombre: 'chorizo'}).then((resultado) => {
    res.status(200).json(resultado);
  });
  };
  

  exports.addProducto = (req, res) => {
      console.log(req.body);
  //a la constante posts le agrega lo que llegó, registro en memoria
  //posts.push(req.body); 
  //incluir en la DB
  const productoAdd = new Producto({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
     
  });

  productoAdd.save().then((createdProducto) => {
      console.log(createdProducto);
      //respuesta 201 que es código de creado
      res.status(201).json("Producto creado");
  });
  };