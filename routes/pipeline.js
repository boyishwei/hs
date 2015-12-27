module.exports=function(app){
  var router = require('express').Router()
  var model = require('../models');
  var Pipeline = model.Pipeline;  

  router.get('/new', function(req, res, next) {
      res.render('pipeline/new')
      })

  router.get('/save', function(req, res) {
      var position = new Position({
          job_id: req.query.job_id,
          title: req.query.title,
          desc: req.query.desc,
          qualification: req.query.qualification
      })  

      position.save(function(err,position){
        if(err)
        console.log(err.message)
        else
        res.redirect('/positions');
        })
      })

  router.get('/show/:id',function(req,res){
        Position.findById(req.params.id, function(err, position){
           if(position == undefined || err) 
             res.send("Can not find position with id: " + req.params.id) 
           else
             res.render('position/show', {position:position})
        })
      })

  router.get('/:id/edit',function(req, res){
      Position.findById(req.params.id, function(err, position){
         if(position == undefined || err) 
           res.send("Can not find position with id: " + req.params.id) 
         else
           res.render('position/edit', {position:position})
      }) 
    }) 

  router.get('/update',function(req, res){
      var position = {
          job_id: req.query.job_id,
          title: req.query.title,
          desc: req.query.desc,
          qualification: req.query.qualification
        }  
      console.log('updating...') 
      Position.findOneAndUpdate(req.query.id, position, function(err, position){
          if(!position || err)
            res.send('update failed' + err)
          else
            res.redirect("/position/show/" + position.id)
      })
  })

  router.get('/', function(req, res) {
      Position.find(function(err, positions){
        res.render('position/index', {positions:positions})
        })
      }) 

  app.use('/pipeline(s)?', router)
}
