const Smoothie = require('../models/Smoothie')
const mongoose = require('mongoose')

const createSmoothie = async (req, res) =>{
  const { name, made } = req.body
  if(!name){ return res.status(400).json({message: 'Missing name'}) }
  if(!made){ return res.status(400).json({message: 'Missing made'}) }

  try {
    const user_id  = req.user._id
    const smoothie = await Smoothie.create({name, made, user_id})
    res.status(200).json({smoothie})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const getSmoothies = async (req, res) =>{
  const user_id = req.user._id
  const smoothies = await Smoothie.find({ user_id }).sort({ createdAt: -1 })
  res.render('smoothies', {smoothies})
}

const getSmoothie = async (req, res) =>{
  console.log('get smoothie')
}

const deleteSmoothie = async (req, res) =>{
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Smoothie Id'})
  }

  const smoothie = await Smoothie.findOneAndDelete({_id: id})

  if (!smoothie) {
    return res.status(404).json({error: 'No such smoothie'})
  }

  return res.status(200).json(smoothie)

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