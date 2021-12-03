//importación del módulo express bajo el alias express
const express = require('express')

var cors = require("cors");

//genera una nueva instancia de express
const app = express()
//importación del mongoose
const mongoose = require("mongoose");

//Import de las rutas

const postRoutes = require("./routes/posts")

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use(cors());

//configuración de la conexión a la BASE DE DATOS
////cadena de conexión, y un then que es cuando se ejecuta el connect que hace ok y un catch para capturar errores
mongoose.connect(
    "mongodb+srv://DBPizzaYa:XG0cfegZ0w5Z7jaf@cluster0.mxjuj.mongodb.net/PizzaYa?retryWrites=true&w=majority"
    ).then(() => {
        console.log("Estamos conectados a la DB...")
    }).catch(() => {
        console.log("Hay un problema con la conexión!") 
    });


app.use("/Producto", postRoutes);

//exportar app para que lo use en server.js
module.exports =app;
