var mongoose = require('mongoose')
var candidateSchema = mongoose.Schema({
  name: String,
  phone: String,
  cws_id: String,
  comment: String,
  skill_pool: String
})

var Candidate = mongoose.model('Candidate', positionSchema)

module.exports = Candidate 
