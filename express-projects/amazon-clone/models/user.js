var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// constructor
var Schema = mongoose.Schema;

// The user schema attributes
var UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  profile: {
    name: { type: String, default: '' },
    picture: { type: String, default: '' }
  },
  address: { type: String },
  history: [{
    date: Date,
    paid: { type: String, default: 0 }
  }]
});

/* Hash the password before saving to database */
UserSchema.pre('save', function(next){
  var user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt){
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// compare password in the database and the one that user type in
UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

// export user schema
module.exports = mongoose.model('User', UserSchema);
