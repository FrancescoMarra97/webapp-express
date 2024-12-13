const express = require('express');
const router = express.Router();

const FilmController = require('../controllers/FilmController')

//tutti i film
router.get('/', FilmController.index);

// un singolo film
router.get('/:id', FilmController.show)

router.post('/:id/review', FilmController.review)

module.exports = router;