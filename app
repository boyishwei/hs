#!/usr/bin/env coffee
express = require('express')
app = express()

#config server
require('./config')(app, express)

#add routes
require('./routes')(app)

#add helpers
require('./helpers')(app)

app.listen 3000, () ->
  console.log('app listening at port 3000 ....')
