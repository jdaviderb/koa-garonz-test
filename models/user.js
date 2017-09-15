const mongoose = require('../database/mongoose')
const userSchema = mongoose.Schema({
    name: String
})
const user = mongoose.model('users', userSchema)
module.exports  = user