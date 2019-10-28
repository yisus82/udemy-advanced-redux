const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true },
});
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
