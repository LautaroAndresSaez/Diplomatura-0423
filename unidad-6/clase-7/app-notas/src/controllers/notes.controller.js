const NoteModel = require("../models/note.model");

const add = async (req, res) => {
  try {
    console.log(req.body);
    await NoteModel.create(req.body);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "Upss... rompimos la base de datos!",
    });
  }
};

const findAll = async (req, res) => {
  const notes = await NoteModel.findAll();
  res.send(notes);
};

module.exports = {
  add,
  findAll,
};
