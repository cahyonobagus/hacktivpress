const User = require('../models/User')
var jwt = require('jsonwebtoken')
require('dotenv').config()
var bcrypt = require('bcryptjs');

module.exports = {
  create: (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
      username: req.body.username,
      password: hash
    })
    .then(user => {res.send(user)})
    .catch(err => {
      res.send(err)
    })
  },
  auth: (req, res) => {
    User.findOne({username: req.body.username})
    .then(user => {
      if (user.password) {
        var cekpassword = bcrypt.compareSync( req.body.password, user.password)
        if (cekpassword) {
          var token = jwt.sign({
            _id: user._id,
            username: user.username
          }, 'qwertyuiop')
          res.send(token)
        } else {
          res.send({message: 'invalid_password'})
        }
      } else {
        res.send({message: 'user_not_found'})
      }
    })
    .catch(err => {res.send(err)})
  },
  verify: (req, res) => {
    jwt.verify(req.body.token, 'qwertyuiop', function(err, decoded) {
      if(!err) res.send(decoded)
      else res.send(err)
    })
  }
}
