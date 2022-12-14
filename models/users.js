const { Schema, model} = require("mongoose")


const User =  new Schema({
    login:{type:String, unique:true, required:true},
    mail:{type:String, unique:true, required:true},
    password:{type:String, unique:true, required:true},
    roles:[{type:String, ref:"roles"}]
    
})

module.exports = model('User',User)