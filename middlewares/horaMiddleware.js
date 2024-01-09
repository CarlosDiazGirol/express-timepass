// middlewares/horaMiddleware.js
module.exports = (req, res, next) => {
  const now = new Date();
  const minutosActual = now.getMinutes().toString().padStart(2, '0');
  req.horaActual = now.getHours();
  req.horaTotal = `${req.horaActual}:${minutosActual}`;
  next();
};
