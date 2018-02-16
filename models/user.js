var connection = require('../config/db_connection');
var Joi = require('joi');
var ValidationSchemas = require('../util/validations');

var User = function(params) {
    this.fname = params.fname;
    this.phoneno = params.phoneno;
    this.email = params.email;
    this.hdenbpgtitle = params.hdenbpgtitle;
    this.bpgtitle = params.bpgtitle;
}

User.prototype.register = function(response, handleDbCallback) {
    var person = {
        fname: this.fname,
        phoneno: this.phoneno,
        email: this.email,
        hdenbpgtitle: this.hdenbpgtitle,
        bpgtitle: this.bpgtitle,
    };

    Joi.validate(person, ValidationSchemas.registerSchema, function(validationError, result){
        if (!validationError) {
            connection.query('INSERT INTO register_user SET ?', person, function(databseError, result){
                if (databseError) {
                    //throw databseError;
                    handleDbCallback(databseError, result, response)
                } else {
                    console.log("user registered");
                    console.log("db operation success");
                    handleDbCallback(databseError, result, response)
                }
            });
        } else {
            handleDbCallback(validationError, null, response)
        }
    })
}

module.exports = User;
