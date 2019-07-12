const { getRandomQuote } = require('../../lib/');

module.exports = (req, res, next) => {
  getRandomQuote(1)
    .then(quote => {
      req.quote = quote;
      next();
    });
}
;