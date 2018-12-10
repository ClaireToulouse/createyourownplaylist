const express = require('express');
const router = express.Router();
const connection = require('../conf.js');


router.get('/', (req, res) => res.send(
  'Welcome to your playlists default page')
);

router.get('/all', (req, res) => {
  connection.query('SELECT * from playlists', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des playlists');
    } else {
      res.json(results);
    }
  })
});




module.exports = router;