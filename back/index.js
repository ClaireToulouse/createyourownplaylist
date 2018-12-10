const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;
const playlistsRouter = require('./routes/Playlists');
const tracksRouter = require('./routes/Tracks');
const connection = require('./conf.js');

app.use(bodyParser.json());

app.get('/', (req,res) => res.send('index page'));

app.use('/api/playlists', playlistsRouter);
app.use('/api/tracks', playlistsRouter);


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
