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

  app.use(function(err, req, res, next){
      console.log('unhandled error detected: ' + err.message);
      res.send('500 - server error');
      });

  app.use(function(req, res){
      console.log('route not handled');
      res.send('404 - not found');
      });
 // var normalizedPath = require("path").join(__dirname);

 // var routes = [] 
 // require("fs").readdirSync(normalizedPath).forEach(function(file) {
 //   console.log(file)
 //   if(file != "index.js")
 //     routes.push(require('./' + file)(express))
 // });

 // return routes
}
