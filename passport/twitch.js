const passport = require('passport');
const request = require('request');
const { OAuth2Strategy } = require('passport-oauth');

const {
  TWITCH_CLIENT_ID,
  TWITCH_CALLBACK_URL,
  TWITCH_CLIENT_SECRET,
} = require('../config');
const User = require('../models/user');

// Passport Setup/Routes
// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = (accessToken, done) => {
  const options = {
    url: 'https://api.twitch.tv/helix/users',
    method: 'GET',
    headers: {
      'Client-ID': TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  request(options, (error, response, body) => {
    if (response && response.statusCode === 200) {
      done(null, JSON.parse(body));
    } else {
      done(JSON.parse(body));
    }
  });
};


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


passport.use('twitch', new OAuth2Strategy({
  authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
  tokenURL: 'https://id.twitch.tv/oauth2/token',
  clientID: TWITCH_CLIENT_ID,
  clientSecret: TWITCH_CLIENT_SECRET,
  callbackURL: TWITCH_CALLBACK_URL,
  state: true,
},
(async (accessToken, refreshToken, profile, done) => {
  // Securely store user profile in your DB
  const existingUser = await User.findOne({ twitchID: profile.data[0].id });
  if (existingUser) {
    // Already have a user with this Twitch ID
    console.log('--- Existing User ---');
    return done(null, existingUser);
  }
  // DO NOT have user with this Twitch ID
  const user = await new User({
    twitchID: profile.data[0].id,
    displayName: profile.data[0].display_name,
    tokens: {
      accessToken,
      refreshToken,
    },
  });
  await user.save();
  return done(null, user);
})));
