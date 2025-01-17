// Permet d'importer express.js
const express = require('express');
// DotEnv permet de mettre des variable d'environnement
require("dotenv").config();

// Déclare le port 500 en variable
const PORT = process.env.PORT || 5000;

// Déclaration du module app express
const app = express();

// Ecoute si on est bien sur le port 500, si oui on retourne le console.log
app.listen(PORT, () => {
    console.log(`Server is running on port : ${5000}`);
});