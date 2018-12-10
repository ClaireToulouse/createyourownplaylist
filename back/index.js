const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;
const playlistsRouter = require('./routes/playlists');

app.use(bodyParser.json());

app.get('/', (req,res) => res.send('index page'));

app.use('/api/playlists', playlistsRouter);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
