module.exports=function(app, express){
  app.set('views', __dirname + '/../views')
  app.set('view engine','jade')
  //app.set("view options", { layout: __dirname + "/views/layouts/application" })
  app.use(express.static(__dirname + '/../public'))
}
