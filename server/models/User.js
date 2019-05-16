const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    // minlength: 5,
  },
  phone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Customer", "Employee", "Owner"],
    default: "Customer"
  }


}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
