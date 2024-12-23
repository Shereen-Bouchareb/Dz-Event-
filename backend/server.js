const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/db');

const app = express();



const server = http.createServer((req, res) => {
  if (req.url.startsWith('/signup')) {
    authRoutes(req, res); // Authentification via le module HTTP natif
  } else if (req.url.startsWith('/profile')) {
    profileRoutes(req, res); // Gestion des profils via le module HTTP natif
  } else if (req.url.startsWith('/api/gallery')) {
    app(req, res); // Déléguer les routes de galerie à Express
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route non trouvée.' }));
  }
});

// Servir les fichiers uploadés
app.use('/uploads', express.static('uploads'));


// Configuration du serveur
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
