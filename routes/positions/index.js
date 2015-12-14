module.exports=function(app){
  var router = require('express').Router()

  // invoked for any requested passed to this router
  router.use(function(req, res, next) {
    console.log("middle ware")
    next()
  });  

  // will handle any request that ends in /events
  // depends on where the router is "use()'d"
  router.get('/new', function(req, res, next) {
    res.render('position/new')
  })

  router.get('/save', function(req, res, next) {
    res.send('gonna to save!')
  })

  router.get('/', function(req, res, next) {
    res.send('hello you!')
    next()
  }) 

  app.use('/positions', router)
}
