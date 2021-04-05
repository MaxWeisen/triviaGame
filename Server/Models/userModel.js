const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  username: {type: String, required: true,  index: true, unique: true},
  password: {type: String, required: true},
  highestScore: {type: Number},
  previousScores: {type: Array}
}, {timestamps: true});

// Runs When a User is created for the first time
UserSchema.pre('save', async function(next){
  const user = this;
  user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  return next();
});




modules.exports = mongoose.model('User', UserSchema);