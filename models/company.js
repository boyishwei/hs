var companySchema = mongoose.Schema({
  name: String,
  address: String,
  contact_number: String,
  industry: String,
  role: String,
})

var Company = mongoose.model('company', companySchema)
