const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Precisamos colocar a router aqui para ser encontrada
const clientRoute = require('./routes/clientRoute');

// Converter as requisições em json
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/client', clientRoute);

module.exports = app;