module.exports=function(app){
  var router = require('express').Router()
  var models = require('../models')
  var User= models.User

 // var Cat = mongoose.model('Cat', { name: String });

 // var kitty = new Cat({ name: 'Zildjian' });
 // kitty.save(function (err) {
 //       if (err) // ...
 //         console.log('meow');
 //         });
  User.find(function (err, kittens) {
      if (err) return console.error(err);
        console.log(kittens.length);
        })

  // invoked for any requested passed to this router
  router.use(function(req, res, next) {
      console.log('hi user')
    next()
  });  

  // will handle any request that ends in /events
  // depends on where the router is "use()'d"
  router.get('/new', function(req, res, next) {
    res.render('user/new')
  })

  router.get('/save', function(req, res) {
    var user = new User({
        name: 'jiang',
        role: 'admin' 
      })  
    user.save(function(){
        res.send('user saved!')
      })
  })

  router.get('/find', function(req, res) {
    User.findById("56710aefb104d3a81fb061ed",function(err, user){
        console.log(user.id)
        res.send(user)
      })
  })

  router.get('/', function(req, res, next) {
      console.log('user index')
    res.send('hello you! User index')
  }) 

  app.use('/user', router)
}
