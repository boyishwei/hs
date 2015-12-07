module.exports=function(app){
  app.locals.asset=function(path){
    return "assets" + path
  } 
  
  app.locals.greeting="hello you!"
}
