var express = require('express')
var app = express()

//config server
require('./config')(app, express)

//add routes
require('./routes')(app)

//add helpers
require('./helpers')(app)

app.listen(3000, function () {
  console.log('app listening at port 3000 ....')
})
