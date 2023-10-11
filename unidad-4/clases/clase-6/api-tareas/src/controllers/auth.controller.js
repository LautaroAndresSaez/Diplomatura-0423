const signIn = (req, res) => {
  req.session.nombre = req.body.nombre;
  res.send({
    msg: "Usuario valido!",
    tuSession: req.session,
  });
};

module.exports = { signIn };
