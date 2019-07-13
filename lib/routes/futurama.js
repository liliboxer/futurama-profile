const { Router } = require('express');
const futuramaQuotes = require('../middleware/futuramaQuotes');

const profiles = [];

module.exports = Router()
  .post('/api/v1/profiles', futuramaQuotes, (req, res) => {
    // what we receive 
    const { name, favoriteCharacter } = req.body;
    // create profile to store
    const profile = { 
      name, 
      favoriteCharacter, 
      tagline: req.quote.quote 
    
    };

    profiles.push(profile);
    res.send(profile);
  })

  .get('/api/v1/profiles', (req, res) => {
    res.send(profiles);
  })
