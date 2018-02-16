var User = require('../models/user.js')
var util = require('../util/dbCallback')

var allMiddleware = function(req, res, next){
    console.log("middleware execution");
    next();
}

var registerUser = function(req, res) {
    console.log('register user');
    var newUser = new User(req.body)
    newUser.register(res, util.handleDbCallback);
}

var deleteUser = function(req, res){
    console.log('delete user')
    res.status(201).json("success")
}

module.exports = {
    allMiddleware: allMiddleware,
    registerUser: registerUser,
    deleteUser: deleteUser
}
