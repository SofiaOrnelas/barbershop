const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Admin = require ("../models/Admin");
const Calendar = require("../models/Calendar");

const bcryptSalt = 10;

require('../configs/database')

let userDocs = [
  new User({
    email: "alice@gmail.com",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  }),
  new User({
    email: "bob@gmail.com",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  })
]

let CalendarDocs = [
  new Calendar({
    pictureUrl: "https://lh5.googleusercontent.com/p/AF1QipNqlBgeyUgKqGUH_oYogtxRQ0KPTtLAgiCXEUon",
    location: {
      type: "Point",
      coordinates: [ -9.209744,38.696060]
    },
  }),
  new Calendar({
    pictureUrl: "https://lh5.googleusercontent.com/p/AF1QipO_kynLt94FYjYKmstOul5mZ-fnXyb6O_2Kr7SL",
    location: {
      type: "Point",
      coordinates: [-9.136864,38.720205]
    },
  }),
  new Calendar({
    pictureUrl: "https://lh5.googleusercontent.com/p/AF1QipONkHmWhUjFjelUXxlekBg1Aq0ccW20yXxBRxxQ",
    location: {
      type: "Point",
      coordinates: [13.451661,52.507734]
    },
  })
]

let AdminDocs = [
new Admin({
        name: Duarte,
        email: "2cowork@gmail.com",
        password: bcrypt.hashSync("duarte", bcrypt.genSaltSync(bcryptSalt)),
        role: ['OWNER'],
        pictureUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1720241048207314&imgrefurl=https%3A%2F%2Fm.facebook.com%2FBarbearia-DuArte-1720241048207314%2F&docid=61RTryoLK1C4oM&tbnid=tNqLVrK_O-C30M%3A&vet=10ahUKEwjKhqTD-5jiAhWC1uAKHROMD3gQMwhAKAAwAA..i&w=960&h=955&bih=781&biw=1301&q=barbearia%20du%27arte&ved=0ahUKEwjKhqTD-5jiAhWC1uAKHROMD3gQMwhAKAAwAA&iact=mrc&uact=8' ,   

//   new Visit({
//     _user: userDocs[0]._id,
//     _Calendar: CalendarDocs[1]._id,
//   }),
//   new Visit({
//     _user: userDocs[1]._id,
//     _Calendar: CalendarDocs[0]._id,
  })
]


// Promise.all([
//   User.deleteMany(),
//   Calendar.deleteMany(),
//   Visit.deleteMany(),
// ])
//   .then(() => {
//     console.log('All users, street arts and visits have been deleted')

//     return Promise.all([
//       User.create(userDocs),
//       Calendar.create(CalendarDocs),
//       Visit.create(visitDocs),
//     ])
//   })
//   .then(() => {
//     console.log(`${userDocs.length} users created`)
//     console.log(`${CalendarDocs.length} street arts created`)
//     console.log(`${visitDocs.length} visits created`)
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })