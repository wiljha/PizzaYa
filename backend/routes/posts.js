//importación del módulo express bajo el alias express
const express = require('express');
//traer modulo router
const router = express.Router();

const PostController = require("../controllers/posts");
//rutas a trabajar
router.get("/Consultar", PostController.getProducto);
router.post("/Ordenar", PostController.addProducto);

module.exports =router;
