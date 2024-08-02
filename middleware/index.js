const jwt = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = (req, res, next) => {

  const token = req.cookies.jwt

  // check json web token exits and is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodeToken)=>{
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

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodeToken)=>{
      if(err) {
        console.log(err.message)
        res.locals.user = null;
        next()
      } else {
        //console.log(decodeToken)
        let user = await User.findById(decodeToken.id)
        // https://www.expressjs.com.cn/4x/api.html#res.locals
        res.locals.user = user;
        req.user = user;
        next()
      }
    })
  } else {
    res.locals.user = null;
    next()
  }
}

module.exports = { requireAuth, checkUser }