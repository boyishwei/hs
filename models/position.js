var mongoose = require('mongoose')
var positionSchema = mongoose.Schema({
  job_id: String,    
  title: String,
  desc: String,
  qualification: String
 // company_id: String,
 // tech_catgray: String,
 // lebel: String,
 // requrie_dipnoma: String,
 // require_work_exp: Number,
 // salary_rank: String,
})

var Position = mongoose.model('Position', positionSchema)

module.exports = Position
