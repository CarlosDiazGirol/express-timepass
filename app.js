const express = require('express');
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware');
const endrouteRouter = require('./routes/endroute');
const indexRouter = require('./routes/index');

// Middleware para obtener la hora actual
app.use(horaMiddleware);

// Rutas
app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

app.use((req, res, next) => {
  res.status(404).send('<h1>404 Not Found</h1><p>La página que estás buscando no existe.</p>');
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
