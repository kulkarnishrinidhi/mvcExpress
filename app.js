var express = require('express');
var bodyParser = require('body-parser')

var app = express()

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(request, response, next){
  console.log("every request passes through this middleware.\n Write authentication here")
  next();
});

var userRouter = require('./routes/users.js');
app.use('/users', userRouter);

app.listen(8085, function(){
  console.log("server is running on port 8085");
})
