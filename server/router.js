const { signup, signin } = require('./controllers/authentication');
const { requireAuth, requireSignin } = require('./services/passport');

module.exports = app => {
  app.get('/', requireAuth, (_req, res) => {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignin, signin);
  app.post('/signup', signup);
};
