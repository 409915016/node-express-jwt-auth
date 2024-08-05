const jwt = require('jsonwebtoken')
const User = require('../models/User')

// check current user
const checkUser = (req, res, next) => {
  const { jwt: _jwt } = req.cookies || {}
  const token = _jwt || null
  if(!token) { // token dont exit
    if(req.path !== '/login') res.redirect('/login')
    res.locals.user = null;
    next()
  }
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodeToken) => {
      if (err) { // token is verified
        if(req.path !== '/login') res.redirect('/login')
        res.locals.user = null;
        next()
      } else {
        let user = await User.findById(decodeToken.id)
        res.locals.user = user; // https://www.expressjs.com.cn/4x/api.html#res.locals
        req.user = user;
        next()
      }
    })
  }
}

module.exports = { checkUser }