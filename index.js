const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
const PORT = 5000 || process.env.PORT;

const { MONGO_URI, SESSION_SECRET } = require('./config');

// Connect MongoDB with Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const { connection } = mongoose;
connection.once('open', () =>
  console.log('MongoDB database connection established successfully')
);

// Setup app usagfed of Passport
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./passport/twitch');

// Basic Express Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Passport Routes
require('./routes/twitch')(app);

// Production for Heroku (When Deploying)
// if (process.env.NODE_ENV === 'production') {
//   const path = require('path');
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// Express Server Start
app.listen(PORT, () =>
  console.log(`Backend Server listening on port ${PORT}!`)
);
