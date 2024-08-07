const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const smoothieRoutes = require('./routes/smoothieRoutes')
const cookieParser = require('cookie-parser')
const { checkUser } = require('./middleware/')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.DATABASE_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
//app.get('/smoothies', requireAuth , (req, res) => res.render('smoothies'));
app.use(authRoutes)
app.use('/smoothies', checkUser, smoothieRoutes)
app.get('/addSmoothies', (req, res)=>{
  res.render('addSmoothie')
})

//cookies

// app.get('/set-cookies', (req, res)=>{
//   res.cookie('newUser', false)
//   res.cookie('isEmployee', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly: true})
//   res.send('you got the cookies!')
// })

// app.get('/read-cookies', (req, res)=>{
//   const cookie = req.cookies;
//   console.log(cookie)
//   res.json(cookie)
// })
