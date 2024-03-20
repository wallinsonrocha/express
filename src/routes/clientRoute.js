const express = require('express');
const router = express.Router();
const clienteController = require('./../controllers/clientController');

// Aqui nós colocamos a função do controller que queremos implementar.
router.get('/', clienteController.getClients);

// Para receber por algum parâmetro nós fazemos dessa maneira.
router.get('/:id', clienteController.getById);

router.post('/', clienteController.createClient);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;