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

const update = async (req, res) => {
  const { id } = req.params;
  const { name, note, color } = req.body;

  try {
    const noteToUpdate = await NoteModel.findByPk(id);

    if (!noteToUpdate) {
      return res.status(404).json({ msg: "nota no encontrada" });
    }
    if (!name || !note || !color) {
      return res
        .status(400)
        .json({ msg: "Faltan campos requeridos para la accion" });
    }

    noteToUpdate.name = name;
    noteToUpdate.note = note;
    noteToUpdate.color = color;
    await noteToUpdate.save();

    res
      .status(200)
      .json({ msg: "Nota actualizada con exito", note: noteToUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Upss... rompimos la base de datos!",
    });
  }
};

module.exports = {
  add,
  findAll,
  update,
};
