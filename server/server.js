const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/adaptador_apm', function (req, res) {
    let body = req.body;
    res.json({
        datosEntrada: body
    })
});

app.listen(3000, ()=>{
  console.log(`Escuchando en el puerto ${3000}`)
});