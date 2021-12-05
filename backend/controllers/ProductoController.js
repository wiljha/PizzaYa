/*
Es necesario reemplazar la palabra producto, por su
correspondiente entidad, ejemplo author, ...

Una forma rapida de hacerlo es utilizar Ctrl + H,
Ojo despues de reemplazar igual es necesario revisar
si todo quedo bien.
*/

var producto = require('../models/producto.js');

// read -> GET
exports.readAll = function (req, res) {
        producto.find(function(err, productos) {
            if(!err) {
                res.json(productos);
            } else {
                console.log('ERROR: ' + err);
            }
        });
};

// read one-> GET
exports.readById = function (req, res) {
    const id = req.params.id; // producto/id ej: producto/168468
    //const idautor = req.query.idautor; // producto/id ej: producto/168468?idautor=456
    //console.log(id,idautor);

    producto.findById(id, function(err, productos) {
        if(!err) {
            res.json(productos);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

// create one-> POST
exports.create = function (req, res) {
    
    var newproducto = new producto({
        nombre:    req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
        
    });

    newproducto.save(function(err) {
        if(!err) {
            console.log('Created');
            res.status(201).json({message: "Post Creado"});
        } else {
            console.log('ERROR: ' + err);
            res.status(400).send(err);
        }
    });


};


// delete one-> DELETE
exports.deleteOne = function (req, res) {
    const id = req.params.id; // producto/id ej: producto/168468

    producto.findByIdAndDelete(id, function(err, productos) {
        if(!err) {
            res.json(id);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};

// delete All-> DELETE
exports.deleteAll = function (req, res) {
    producto.deleteMany(function(err, res) {
        if(!err) {
            res.json("OK");
        } else {
            console.log('ERROR: ' + err);
        }
    });

};

// update one-> PUT
exports.update = function (req, res) {
    const id = req.params.id; // producto/id ej: producto/168468

    producto.findByIdAndUpdate(id, req.body, function(err, productos) {
        if(!err) {
            res.json(id);
        } else {
            console.log('ERROR: ' + err);
        }
    });
};