const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    //not sure if this is safe or secure
    password:String,
    email:String,
    notes:[{
     topic:String,
     notes:String,
     blurts:[String],
    }]

})

module.exports = mongoose.model("User", userSchema);