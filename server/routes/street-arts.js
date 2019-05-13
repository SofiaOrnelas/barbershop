const express = require('express');
const Calendar = require('../models/Calendar');
const uploader = require('../configs/cloudinary');
const router = express.Router();

router.get('/', (req, res, next) => {
  Calendar.find()
    .then(Calendars => {
      res.json(Calendars)
    })
});

router.get('/:CalendarId', (req, res, next) => {
  Calendar.findById(req.params.CalendarId)
    .then(Calendar => {
      res.json(Calendar)
    })
});

// `uploader.single('picture')` parses the data send with the name `picture` and save information inside `req.file`
router.post('/', uploader.single('picture'), (req, res, next) => {
  let { lat, lng } = req.body
  let pictureUrl = req.file.url
  Calendar.create({
    pictureUrl,
    location: {
      type: 'Point',
      coordinates: [lng,lat]
    }
  })
    .then(Calendar => {
      res.json(Calendar)
    })
    .catch(next)
});

module.exports = router;