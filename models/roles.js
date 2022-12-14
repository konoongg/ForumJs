const mongoose = require("mongoose")


const Role =  new mongoose.Schema({
    value:{type:String, unique: true, default:"user"}
    
})

module.exports = mongoose.model('Role',Role)