const User = require('../models/user');

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

      return res.status(204).send();
    });
  });
};
