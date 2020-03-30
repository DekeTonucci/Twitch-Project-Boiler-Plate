const passport = require('passport');

module.exports = (app) => {
  // Passport Routes
  // Set route to start OAuth link, this is where you define scopes to request
  app.get(
    '/auth/twitch',
    passport.authenticate('twitch', { scope: 'user_read' })
  );

  // Twitch CAllback
  app.get(
    '/auth/twitch/callback',
    passport.authenticate('twitch'),
    async (req, res) => {
      res.redirect('/dashboard');
    }
  );

  // Is there a current user logged in
  app.get('/auth/current_user', (req, res) => {
    console.log('current_user:', req.user);
    if (req.user) {
      res.send(req.user);
    } else {
      res.send(null);
    }
  });

  // Logout user.
  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
