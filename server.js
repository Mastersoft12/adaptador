const express = require('express');
const app = express();
const config = require('./config/config.js');
const log = require('winston');


app.use(require('./routes/centralExterna'));

app.listen(config.get('port'), ()=>{
  log.log('info',`Escuchando en el puerto ${config.get('port')}`)
});
