const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE,  { useMongoClient: true })
module.exports = mongoose