var jobSchema = mongoose.Schema({
  title: String,
  company_id: String,
  tech_catgray: String,
  lebel: String,
  requrie_dipnoma: String,
  require_work_exp: Number,
  salary_rank: String,
})

var Job = mongoose.model('job', jobSchema)
