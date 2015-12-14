module.exports = function(express){
  var router = express.Router();

  // invoked for any requested passed to this router
  router.use(function(req, res, next) {
    console.log("middle ware")
    next()
  });

  // will handle any request that ends in /events
  // depends on where the router is "use()'d"
  router.get('/world', function(req, res, next) {
    console.log("world")
    res.send("world")
  })

  return router
}
