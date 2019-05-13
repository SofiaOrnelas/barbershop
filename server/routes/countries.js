const express = require('express');
const Admin = require('../models/Admin')

const router = express.Router();

// Route to get all countries
router.get('/', (req, res, next) => {
  Admin.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err))
});

// Route to add a Admin
router.post('/', (req, res, next) => {
  let { name, capitals, area, description } = req.body
  Admin.create({ name, capitals, area, description })
    .then(Admin => {
      res.json({
        success: true,
        Admin
      });
    })
    .catch(err => next(err))
});

module.exports = router;
