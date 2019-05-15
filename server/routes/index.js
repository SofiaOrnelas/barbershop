const express = require('express');
const { isLoggedIn, isEmployee } = require('../middlewares')
const router = express.Router();
const Schedule = require('../models/Schedule')


// Route to get all dates
router.get('/schedules', (req, res, next) => {
  Schedule.find()
    .then(dates => {
      res.json(dates);
    })
    .catch(err => next(err))
});


// CREATE THE SCHEDULE OF THE EMPLOYEE/OWNER
router.post('/schedules', isEmployee, (req, res, next) => {
  let { date, isWorkingMorning, isWorkingAfternoon } = req.body

  let bookings = []
  if (isWorkingMorning) {
    for (let hour = 9; hour < 13; hour += 0.5) {
      bookings.push({
        _customer: null,
        hour: hour
      })
    }
  }
  if (isWorkingAfternoon) {
    for (let hour = 15; hour < 19; hour += 0.5) {
      bookings.push({
        _customer: null,
        hour: hour
      })
    }
  }

  Schedule.create({
    date: date,
    _employee: req.user._id,
    bookings: bookings
  })
    .then(schedules => {
      res.json(schedules)
    })
    .catch(next)
});

// ADD A BOOKING TO THE SCHEDULE (REQ.USER._ID AND REQ.BODY.HOUR)
router.post('/schedules/:scheduleId/bookings', isLoggedIn, (req, res, next) => {
  let hour = Number(req.body.hour)
  Schedule.findById(req.params.scheduleId)
    .then(schedule => {
      let desiredBooking = schedule.bookings.find(booking => booking.hour == hour)
      if (desiredBooking && !desiredBooking._customer) {
        desiredBooking._customer = req.user._id
      }
      else {
        throw new Error("It's not possible to book at " + hour)
      }
      schedule.save()
        .then(() => {
          res.json({
            success: true,
            schedule
          })
        })
    })
    .catch(next)
});

// DELETE THE BOOKINGS
router.delete('/schedules/:scheduleId/bookings', isEmployee, (req, res, next) => {
  let hour = Number(req.body.hour)
  Schedule.findById(req.params.scheduleId)
    .populate("bookings._customer")
    .then(schedule => {
      let desiredBooking = schedule.bookings.find(booking => booking.hour == hour)
      if (desiredBooking && desiredBooking._customer) {
        console.log("TODO: send an email to:", desiredBooking._customer.email)
        desiredBooking._customer = null
      }
      else {
        throw new Error("You can't delete the booking at " + hour)
      }
      schedule.save()
        .then(() => {
          res.json({
            success: true,
            schedule
          })
        })
    })
    .catch(next)
  
  // Bookings.findOneAndDelete({
  //   _id: req.user._Id,
  //   _user: req.body.hour,
  // })
  //   .then(schedule => {
  //     if (schedule) {
  //       res.json({
  //         message: 'The Schedule was successfully deleted',
  //       })
  //     }
  //     else {
  //       res.json({
  //         message: `There is no Schedule with the id "${req.params.scheduleId} or you are not the owner"`,
  //       })
  //     }
  //   })
});


module.exports = router;
