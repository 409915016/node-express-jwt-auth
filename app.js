const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = `mongodb+srv://mather:${process.env.DB_PASS}@mongodb.jolrq.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)