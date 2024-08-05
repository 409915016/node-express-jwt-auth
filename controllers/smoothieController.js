const Smoothie = require('../models/Smoothie')

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
  //const smoothies = await Smoothies.find({ user_id }).sort({ createdAt: -1 })
  // const smoothies = [{
  //   name: 'Tropical Twist', made: 'Peach, Pineapple, Apple juice', user_id: '1'
  // }]
  const smoothies = []
  res.render('smoothies', {smoothies})
}

const getSmoothie = async (req, res) =>{
  console.log('get smoothie')
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