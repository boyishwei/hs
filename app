#!/usr/bin/env coffee
express = require('express')
app = express()

require('tingyun')
#config server
require('./config')(app, express)

#add routes
require('./routes')(app)

#add helpers
require('./helpers')(app)

app.listen 3000, () ->
  console.log('app listening at port 3000 ....')
