const express = require('express');
const router = express.Router();
const connection = require('../conf.js');

// router.get('/', (req, res) => res.send(
//   'Welcome to your Tracks default page')
// );

router.get('/all', (req, res) => {
  connection.query('SELECT * from tracks', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des playlists');
    } else {
      res.json(results);
    }
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM tracks WHERE id=${id}`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des morceaux');
    } else {
      res.json(results);
    }
  });
});

router.get('/', (req, res) => {
  const id = req.query.id;
  connection.query(`SELECT * FROM tracks WHERE id=${id}`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des morceaux');
    } else {
      res.json(results);
    }
  });
});

router.put('/', (req, res) => {
  const id = req.query.id;
  connection.query(`SELECT * FROM tracks WHERE id=${id}`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des morceaux');
    } else {
      res.json(results);
    }
  });
});



module.exports = router;