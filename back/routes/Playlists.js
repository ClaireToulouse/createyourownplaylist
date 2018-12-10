const express = require('express');
const router = express.Router();
const connection = require('../conf.js');

// en tant qu'utilisateur, je veux pouvoir créer une nouvelle playlist
router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO playlists SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la création de playlist!');
    } else {
      res.json(results);
    }
  })
});

//en tant qu'utilisateur, je veux pouvoir consulter une playlist en renseignant son id dans l'url
router.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM playlists WHERE id=${id}`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de la playlist!');
    } else {
      res.json(results);
    }
  });
});

//en tant qu'utilisateur, je veux lister tous les morceaux d'une playlist.
router.get('/', (req, res) => {
  connection.query('SELECT * from playlists', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des playlists');
    } else {
      res.json(results);
    }
  })
});

//en tant qu'utilisateur, je veux pouvoir supprimer une playlist
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    `DELETE FROM playlists WHERE id=${id}`, (err) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des playlists');
      } else {
        res.sendStatus(200);
      }
    }
  )
});

//en tant qu'utilisateur, je veux pouvoir modifier une playlist
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const formData = req.body;
  connection.query(
    'UPDATE playlists SET ? WHERE id=?', [formData, id], (err, results) => {
      if (err) {
        res.status(500).send('La modification de la playlist a échoué');
      } else {
        res.json(results).sendStatus(200);
      }
    }
  )
});


//Créer une route qui permet de rechercher dans la base de données les playlists et les morceaux, selon les critères suivants :
//le titre d'une playlist
router.get('/bytitle/:title', (req, res) => {
  const title = req.params.title;
  connection.query(
    `SELECT * FROM playlists WHERE title=?`, [title], (err, results) => {
      if(err){
        console.log(err);
        res.status(500).send('erreur');
      } else {
        res.status(200).json(results);
      }
    }
  )
})




module.exports = router;