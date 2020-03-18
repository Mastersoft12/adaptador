const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consultaCentralExterna = require('../services/implement/centralexternaservices');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/adaptador_apm', function (req, res) {
    validarCamposEntrada(req.body).then(body => {
        return consultaCentralExterna.consultaCentralExterna(body.numeroDocumento).then(
            result => res.jsonp({result})
        )
    }).catch(
        error => res.status(400).jsonp(
            {
                Estado: false,
                error: error.message
            }));

});

let validarCamposEntrada =  async (body) =>{
    if(body.tipoDocumento === undefined || body.numeroDocumento === undefined){
        throw new Error(`No se enceuntran los campos requeridos`);
    }else{
        return body;
    }
}

module.exports ={
    app,
    validarCamposEntrada
};
