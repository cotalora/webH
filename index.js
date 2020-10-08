"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  if (req.body.queryResult.action == "input.welcome") {

    let msj = 
    "¡Hola, soy tu chatBot de la saga de los libros de  Geralt de Rivia! ¿Sobre qué libro quieres conocer?"+
    "  \n1. El último deseo."+
    "  \n2. La espada del destino."+
    "  \n3. La sangre de los elfos."+
    "  \n4. Tiempo de odio."+
    "  \n5. Bautismo de fuego.";
    response = msj
    res.json({
        "fulfillmentText": response
    });
}
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
