const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consultaCentralExterna = require('../services/implement/centralexternaservices');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/adaptador_apm', function (req, res) {
    let body = req.body;
    consultaCentralExterna.consultaCentralExterna('19574012').then(result => res.jsonp({
        result
    })).catch(err =>{
        ok: false,
        err
    });
});

module.exports = app;
