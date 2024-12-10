const connection = require('../database/connection.js');

// index

function index(req, res) {
    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            movies: results,
            count: results.length
        })
    })
}

//show
function show(req, res) {
    const id = req.params.id;
    const sql = `SELECT * FROM movies WHERE id=?`;
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id=?`;

    // Prima query per il film
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err });
        if (results.length === 0) return res.status(404).json({ err: 'movie not found' });

        // Seconda query per le recensioni
        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err });

            const film = {
                ...results[0],
                reviews: reviewsResults,
            };

            res.json(film);
        });
    });
}


module.exports = {
    index,
    show
}