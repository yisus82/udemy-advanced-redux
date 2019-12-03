const jwt = require('jsonwebtoken');
const User = require('../models/user');

/**
 * Generates a token for an user
 * @param {object} user User's model
 */
const tokenForUser = user => {
  const timestamp = Date.now();
  const payloadJWT = {
    sub: user.id,
    iat: timestamp,
  };
  const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
  const token = jwt.sign(payloadJWT, process.env.AUTH_JWT_SECRET, {
    expiresIn: jwtTokenExpiration,
  });
  return token;
};

exports.signin = (req, res) => {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, doc) => {
    if (err) {
      return next(err);
    }

    if (doc) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email,
      password,
    });

    user.save(err => {
      if (err) {
        return next(err);
      }

      return res.json({ token: tokenForUser(user) });
    });
  });
};
