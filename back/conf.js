const mysql = require('mysql');
const connection = mysql.createConnection({
host : 'localhost', // adresse du serveur
user : 'root', // le nom d'utilisateur
password : 'lilalila', // le mot de passe
database : 'checkpoint_playlists', // le nom de la base de données
});
module.exports = connection;