const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/FilmController')

router.get('/', FilmController.index);

module.exports = router;