// utils/validarHora.js

const hora = 20

module.exports = (req, res, next) => {
  if (req.horaActual < hora || req.horaActual >= 24) {
    res.locals.mensaje = `Aún no es la hora, espera hasta las ${hora}:00`;
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
  next();
};
