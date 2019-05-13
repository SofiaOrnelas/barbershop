const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  email: String,
  password: String,
  contact: Number
}, {
    timestamps: true
  });

module.exports = mongoose.model('User', schema);