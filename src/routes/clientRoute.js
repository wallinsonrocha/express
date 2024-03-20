const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log("Entrei na rota /");
});

module.exports = router;