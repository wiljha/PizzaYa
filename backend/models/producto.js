const connDB = require('../connectionDB/ConnDB'),
	Schema = connDB.Schema;

//modelo de Productos
const productosSchema = Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number },
    descripcion: { type: String },
});

//exporte lo que tenemos de estructura de DB
module.exports = connDB.model("Producto", productosSchema);