const { Router } = require('express');

const profiles = [];

module.exports = Router()
  .post('/api/v1/profiles', (req, res) => {
    // what we receive 
    const { name, favoriteCharacter } = req.body;
    // create profile to store
    const profile = { name, favoriteCharacter };

    profiles.push(profile);
    res.send(profile);
  })
;
