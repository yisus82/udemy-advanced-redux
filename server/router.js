const { signup } = require('./controllers/authentication');
const { requireAuth } = require('./services/passport');

module.exports = app => {
  app.get('/', requireAuth, (_req, res) => {
    res.send({ hi: 'there' });
  });
  app.post('/signup', signup);
};
