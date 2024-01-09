// routes/endroute.js
const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
  res.send('<h1>Ruta Final</h1><p>¡Bienvenido a la ruta final!</p>');
});

module.exports = router;
