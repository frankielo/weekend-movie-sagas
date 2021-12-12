const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const id = req.params.id
  const query =
  `SELECT name FROM movies_genres INNER JOIN genres ON movies_genres.genre_id = genres.id WHERE movie_id = $1`;
  pool.query(query, [id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;