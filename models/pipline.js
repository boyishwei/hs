var piplineSchema = mongoose.Schema({
  status: String,
  job_id: String,
  candidate_id: String,
  assignee_id: String,
})

var Pipline = mongoose.model('pipline', piplineSchema)
