const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    notes:{
     topic:String,
     notes:String,
     blurts:[String],
     accuracy:Number   
    }

})

module.exports = mongoose.model("User", userSchema);