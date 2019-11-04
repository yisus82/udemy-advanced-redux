const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true },
});
userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(parseInt(process.env.AUTH_BCRYPT_SALT_ROUNDS, 10), function(
    err,
    salt
  ) {
    if (err) {
      return next(err);
    }

    // @ts-ignore
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }

      // @ts-ignore
      user.password = hash;
      next();
    });
  });
});
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
