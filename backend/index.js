const express = require('express'); 
const morgan = require('morgan'); //Ver requests en consola
const cors = require('cors'); //
const app = express();


// settings
app.set('port', process.env.PORT || 3000); //Setear puerto, ej: localhost:4000

// middlewares
app.use(morgan('dev')); //Ver request en consola 
app.use(express.urlencoded({extended: false})); //body post form HTML 
app.use(express.json()); //JSON documents
app.use(cors()); //cors()

//Routes
//Cambiar ENTIDAD, 
//app.use('/api', require('./routes/ENTIDAD'));
app.use('/api', require('./routes/productoRouter')); //Ejemplo de una entidad llamada Libro

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});