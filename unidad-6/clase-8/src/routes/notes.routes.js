const { Router } = require("express");

const NotesController = require("../controllers/notes.controller");

const notesRouter = Router();

notesRouter.get("/", NotesController.findAll);
notesRouter.put("/:id", NotesController.update);
notesRouter.post("/", NotesController.add);

module.exports = notesRouter;
