const connDB = require('../connectionDB/ConnDB'),
	Schema = connDB.Schema;

//modelo de Productos
const productosSchema = Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: false },
    precio: { type: Number, required: true },
});

//exporte lo que tenemos de estructura de DB
module.exports = connDB.model("Producto", productosSchema);