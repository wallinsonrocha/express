const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Converter as requisições em json
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;