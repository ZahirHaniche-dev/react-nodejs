// Permet d'importer express.js
const express = require('express');
// DotEnv permet de mettre des variable d'environnement
require("dotenv").config();

// Déclare le port 500 en variable
const PORT = process.env.PORT || 7000;

// Déclaration du module app express
const app = express();

const path = require('path');


// Je dit à App Express que j'utilise du JSON
app.use(express.json());

app.use(express.static('client/build'));
// 
app.get('/api/youtube', (_, res) => {
    res.send({
        msg: "Hello YouTube !"
    })
});

// Servir les fichiers statiques du dossier build
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Rediriger toutes les autres requêtes vers le fichier index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Ecoute si on est bien sur le port 500, si oui on retourne le console.log
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});