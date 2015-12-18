var mongoose = require('mongoose')
var commentSchema = mongoose.Schema({
  comment: String,
  pip_id: String,
  user_id: String,
})

var Comment = mongoose.model('comment', commentSchema)
