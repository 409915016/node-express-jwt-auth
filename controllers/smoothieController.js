const Smoothie = require('../models/Smoothie')
const mongoose = require('mongoose')
const Smoothies = require("mongoose/lib/model");

const createSmoothie = async (req, res) =>{

}

const getSmoothies = async (req, res) =>{
  console.log(Object.keys(req))
  const user_id = req.user._id
  //const smoothies = await Smoothies.find({ user_id }).sort({ createdAt: -1 })
  // const smoothies = [{
  //   name: 'Tropical Twist', made: 'Peach, Pineapple, Apple juice', user_id: '1'
  // }]
  const smoothies = []
  res.render('smoothies', {smoothies})
}

const getSmoothie = async (req, res) =>{

}

const deleteSmoothie = async (req, res) =>{

}

const updateSmoothie = async (req, res) =>{

}

module.exports = {
  createSmoothie,
  getSmoothies,
  getSmoothie,
  deleteSmoothie,
  updateSmoothie
}