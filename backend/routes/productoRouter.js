const express = require('express');

/*
Es necesario reemplazar la palabra producto, por su
correspondiente, ejemplo libroController, ...

Una forma rapida de hacerlo es utilizar Ctrl + H,
Ojo despues de reemplazar igual es necesario revisar
si todo quedo bien.
*/

let productoController = require('../controllers/ProductoController')

let producto = express.Router();

    producto.route('/producto')
        .get(productoController.readAll);

    producto.route('/producto/:id')
        .get(productoController.readById);

    producto.route('/producto')
        .post(productoController.create);

    producto.route('/producto/:id')
        .delete(productoController.deleteOne);

    producto.route('/producto')
        .delete(productoController.deleteAll);

    producto.route('/producto/:id')
        .put(productoController.update);

    module.exports = producto;