const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'OWNER'],
    default: ['ADMIN'],
  },
  pictureUrl: {
    type: String,
  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  _owner: { 
  type: Schema.Types.ObjectId, 
  ref: 'User'
}
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;