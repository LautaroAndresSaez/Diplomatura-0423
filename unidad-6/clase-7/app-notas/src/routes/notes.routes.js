const { Router } = require("express");

const NotesController = require("../controllers/notes.controller");

const notesRouter = Router();

notesRouter.get("/", NotesController.findAll);

notesRouter.post("/", NotesController.add);

module.exports = notesRouter;
