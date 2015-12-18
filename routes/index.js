module.exports = function(app){
  var mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost/hs');
  app.get('/', function (req, res) {
    res.render('demo', {title: 'Hey',message: 'Hello There!'})
  })

  app.get('/jobs/helo/11', function (req, res) {
    res.render('position/new', {title: 'Hey',message: 'Hello There!'})
  })

  require('./position')(app)
  require('./user')(app)
  require('./pipeline')(app)

  app.use(function(err, req, res, next){
      console.log('unhandled error detected: ' + err.message);
      res.send('500 - server error');
      });

  app.use(function(req, res){
      console.log('hello 404')
      res.status(404).render('position/new');
      });
}
