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

// require auth for all smoothie routes
router.use(checkUser)

// GET all smoothie
router.get('/', getSmoothies)

//GET a single smoothie
router.get('/:id', getSmoothie)

// POST a new smoothie
router.post('/', createSmoothie)

// DELETE a smoothie
router.delete('/:id', deleteSmoothie)

// UPDATE a smoothie
router.patch('/:id', updateSmoothie)

module.exports = router