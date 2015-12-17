module.exports=function(app){
  var router = require('express').Router()
  var model = require('../models');
  var Position = model.Position;  

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

  router.get('/save', function(req, res) {
    var position = new Position({
        job_id: req.query.job_id,
        title: req.query.title,
        desc: req.query.desc,
        qualification: req.query.qualification
      })  

    position.save(function(err,position){
        console.log('gogogo')
        if(err)
          console.log(err.message)
        else
          res.redirect('/positions');
      })
  })

  router.get('/', function(req, res, next) {
    Position.find(function(err, positions){
        res.render('position/index', {positions:positions})
      })
  }) 

  app.use('/position(s)?', router)
}
