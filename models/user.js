const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  twitchID: String,
  displayName: String,
  login: String,
  tokens: Object,
},
{ timestamps: true });

module.exports = mongoose.model('users', userSchema);
