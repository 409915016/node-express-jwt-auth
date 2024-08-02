const express = require('express')
const {
  createSmoothie,
  getSmoothies,
  getSmoothie,
  deleteSmoothie,
  updateSmoothie
} = require('../controllers/smoothieController')

const router = express.Router()

const { checkUser} = require('../middleware/index.js')

// require auth for all workout routes
router.use(checkUser)

// GET all workouts
router.get('/', getSmoothies)

//GET a single workout
router.get('/:id', getSmoothie)

// POST a new workout
router.post('/', createSmoothie)

// DELETE a workout
router.delete('/:id', deleteSmoothie)

// UPDATE a workout
router.patch('/:id', updateSmoothie)

module.exports = router