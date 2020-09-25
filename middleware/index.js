const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {

  const token = req.cookies.jwt

  // check json web token exits and is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken)=>{
      if(err) {
        console.log(err.message)
        res.redirect('/login')
      } else {
        console.log(decodeToken)
        next()
      }
    })

  } else {
    res.redirect('/login')
  }

}

module.exports = { requireAuth }