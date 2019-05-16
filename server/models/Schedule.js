const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  date: {type:Date,required: true},
  _employee: { type: Schema.Types.ObjectId, ref: 'User' },
  bookings: [{
    _id:false,
    hour: Number,
    _customer: { type: Schema.Types.ObjectId, ref: 'User'},
  }]
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

scheduleSchema.index({ date: 1, _employee: 1 }, { unique: true });


const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
