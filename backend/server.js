//importar el archivo app.js
const app = require("./app");
//librería interna de javascript HTTP
const http = require("http");

//////////////////////////no dejar un puerto fijo de servidor***************************
const normalizePort = (val) => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  };
  
  const onError = (error) => {
    if (error.syscall !== "listen") {
      throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe" + port : "port " + port;
    console.log(`Backend app listening at ${addr.address}:${port}`)
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
///////////////////////////////////************************************


//define en una constante el numero del puerto sobre el que se va a ejecutar el servidor
//const port = 3000

//app es una instancia de express, se ejecuta un metodo listen, recibe el puerto 3000 y una función ANONIMA que es una funcion que es codigo de un contenido
//él se queda escuchando, si hago cambios debo detenerlo "control c"  y correr node index.js, actualizando el navegador para enviar un GET
//app.listen(port, () => {
//    console.log(`Example app listening at http://localhost:${port}`)
//  })
