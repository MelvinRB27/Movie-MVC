const express = require("express");

const moviesController = require("../controllers/MoviesController");

const router = express.Router();

router.get("/", moviesController.GetIndex);
router.get("/Accion", moviesController.GetAccion);
router.get("/Comedia", moviesController.GetComedia);
router.get("/Documentales", moviesController.GetDocumentales);
router.get("/Suspenso", moviesController.GetSuspenso);
router.get("/Terror", moviesController.GetTerror);


module.exports = router;
