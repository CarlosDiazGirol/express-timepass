//En un solo achivo

const express = require('express');
const app = express();

// Middleware para obtener la hora actual
app.use((req, res, next) => {
  const now = new Date();
  req.horaActual = now.getHours();
  req.horaTotal = `${now.getHours()}:${now.getMinutes()}`;
  next();
});

// Middleware para validar la hora en rutas específicas
app.use(['/endroute'], (req, res, next) => {
  if (req.horaActual < 12 || req.horaActual >= 24) {
    res.locals.mensaje = 'Aún no es la hora, espera hasta las 12:00';
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
  next();
});

// Ruta final
app.get('/endroute', (req, res) => {
  res.send('<h1>Ruta Final</h1><p>¡Bienvenido a la ruta final!</p>');
});

// Ruta principal
app.get('/', (req, res) => {
  const mensaje = req.query.mensaje || '';
  res.send(`<h1>Bienvenido</h1><p>La hora actual es: ${req.horaActual}:00</p>${mensaje}<a href="/endroute"><button>Entrar</button></a>`);
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
