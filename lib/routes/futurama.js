const { Router } = require('express');
const { getRandomQuote } = require('../services/futuramaApi');

module.exports = Router()
  .get('/random', futuramaQuote, (req, res) => {
    res.send(req.quote);
  });
