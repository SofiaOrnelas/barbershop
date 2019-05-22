const express = require('express');
const { isLoggedIn, isEmployee } = require('../middlewares');
const router = express.Router();
const Schedule = require('../models/Schedule');
const User = require('../models/User')
const nodemailer = require ('nodemailer');




// Route to get all dates
router.get('/schedules', (req, res, next) => {
  Schedule.find()
    .populate("_employee")
    .populate("bookings._customer")
    .then(dates => {
      res.json(dates);
    })
    .catch(err => next(err))
});

// Employee schedule
router.get('/my-schedules', isEmployee, (req, res, next) => {
  Schedule.find({ _employee: req.user._id })
    .populate("_employee")
    .populate("bookings._customer")
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
      reservesNumber = 1;
      schedule.bookings.forEach(booking => {
        if(booking._customer && booking._customer.equals(req.user._id)){
          reservesNumber++
        }
      });
      if(reservesNumber <= 3 || req.user.role == "Employee"){
        let desiredBooking = schedule.bookings.find(booking => booking.hour == hour)
      if (desiredBooking && !desiredBooking._customer) { 
        let d = schedule.date.getDate()
        let m = schedule.date.getMonth() + 1
        let y = schedule.date.getFullYear()
        let H = Math.floor(hour)
        let M = hour % 1 === 0.5 ? "30" : "00"
        let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        transporter.sendMail({
          from: '"DuArte Barbershop ✂" <barbearia.duarte.iron@gmail.com>',
          to: req.user.email,
          subject: 'DuArte Barbershop Booking Confirmed for ',
          html: `Your booking on ${d}/${m}/${y} at ${H}:${M} was confirmed. Contact us if you wish to change/cancel. Please don't reply this email. Could be a virus to your hair :(`,
        })
        desiredBooking._customer = req.user._id
      }
      schedule.save()
        .then(() => {
          res.json({
            success: true,
            schedule
          })
        })
        .catch(next)
      }
      
    })
 });


// DELETE THE BOOKINGS
router.delete('/schedules/:scheduleId/bookings', isEmployee, (req, res, next) => {
  let hour = Number(req.body.hour)
	console.log("TCL: hour", req.body)
  
  Schedule.findById(req.params.scheduleId)
  .populate("bookings._customer")
    .then(schedule => {
      let desiredBooking = schedule.bookings.find(booking => booking.hour == hour)
      if (desiredBooking && desiredBooking._customer) {
        let d = schedule.date.getDate()
        let m = schedule.date.getMonth() + 1
        let y = schedule.date.getFullYear()
        let H = Math.floor(hour)
        let M = hour % 1 === 0.5 ? "30" : "00"
        let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        transporter.sendMail({
          from: '"DuArte Barbershop ✂" <barbearia.duarte.iron@gmail.com>',
          to: desiredBooking._customer.email,
          subject: 'DuArte Barbershop Booking Cancelled for ',
          html: `Your booking on ${d}/${m}/${y} at ${H}:${M} was cancelled. We will contact you as soon as possible. Please don't reply this email. Could be a virus to your hair :(`,
        })
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
});


// TODO1

//GET /api/users/:id
/* router.get('/users/:id', isEmployee, isLoggedIn, (req, res, next) => {
    User.findById(req.params.userId).populate('')
      .then(res => {
        res.json(res);
      })
      .catch(err => next(err))
  });
 */
// TODO2

//GET /api/my-profile - User profile

router.get('/my-profile/', isLoggedIn, (req, res, next) => {
  Schedule.find({_customer: req.user._id})
  .populate('_customer')
  .then (data => {
    res.json(data);
  })
})
 
// TODO3

//PUT /api/my-profile 
/* 
router.put('/my-profile', isLoggedIn, (req, res, next) => {

}) */

module.exports = router;