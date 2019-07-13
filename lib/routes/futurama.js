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

  .get('/api/v1/profiles/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/api/v1/profiles/:id', futuramaQuotes, (req, res) => {
    const { favoriteCharacter } = req.body;

    // create profile to store
    const profile = { 
      favoriteCharacter,
      tagline: req.quote.quote 
    };

    profiles[req.params.id].favoriteCharacter = profile.favoriteCharacter;
    profiles[req.params.id].tagline = profile.tagline;
    res.send(profiles[req.params.id]);
  })

  .delete('/api/v1/profiles/:id', (req, res) => {
    const deleted = profiles.splice(req.params.id, 1);
    res.send(deleted[0]);
  });
