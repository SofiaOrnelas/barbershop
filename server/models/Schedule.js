const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  date: date,
  _employee: { type: Schema.Types.ObjectId, ref: 'User' },
  bookings: [{
    _customer: { type: Schema.Types.ObjectId, ref: 'User'},
    hour: Number
  }]
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
