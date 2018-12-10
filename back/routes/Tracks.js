const express = require('express');
const router = express.Router();
const connection = require('../conf.js');

// router.get('/', (req, res) => res.send(
//   'Welcome to your Tracks default page')
// );


//en tant qu'utilisateur, je veux créer et affecter un morceau à une playlist.
router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO tracks SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la création du morceau!');
    } else {
      res.json(results);
    }
  })
});

//en tant qu'utilisateur, je veux supprimer un morceau d'une playlist
router.delete('/:id', (req, res) => {
  const id = req.params;
  connection.query(
    'DELETE FROM tracks WHERE ID=?' [id], err => {
      if (err) {
        res.status(500).send('Erreur de la suppression du morceau');
      } else {
        res.status(200).send('Le morceau a bien été supprimé');
      }
    }
  )
});



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