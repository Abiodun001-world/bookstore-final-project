const express = require("express");
const {
  AddAuthorValidationMw,
  UpdateAuthorValidationMw,
} = require("../validators/author.validator");
const authorController = require("../controllers/author.controller");
const authorRouter = express.Router();

authorRouter.get("/", authorController.getAllAuthors);

authorRouter.get("/:id", authorController.getAuthorById);

authorRouter.post("/", AddAuthorValidationMw, authorController.addAuthor);

authorRouter.put("/:id", UpdateAuthorValidationMw, authorController.updateAuthor);

authorRouter.delete("/:id", authorController.deleteAuthorById);

module.exports = authorRouter;
