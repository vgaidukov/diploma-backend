const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message:
    'Too much requests from your IP. Please wait for 15 min',
});

module.exports = limiter;
