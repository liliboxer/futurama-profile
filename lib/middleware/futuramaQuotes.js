const getRandomQuote = require('../services/futuramaApi');

module.exports = (req, res, next) => {
  getRandomQuote(req.body.favoriteCharacter, 1)
    .then(quote => {
      req.quote = quote[0];
      next();
    });

};
