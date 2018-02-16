var express = require('express');

var User = require('../controllers/user.js');
var userRouter = express.Router();

userRouter.route('/register')
  .all(User.allMiddleware)
  .post(User.registerUser)
  .delete(User.deleteUser);

module.exports = userRouter;
