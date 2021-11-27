const mongoose = require("mongoose");
//modelo de Productos
const productosSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    descripcion: { type: String },
});

//exporte lo que tenemos de estructura de DB
module.exports =mongoose.model("Producto", productosSchema);