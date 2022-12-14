const { Schema, model} = require("mongoose")

const Post =  new Schema({
    header:{type:String,required:true},
    des:{type:String,required:true},
    text:{type:String,required:true},
    autor:{type:String,required:true},
    img:{type: String, default:''}

})

module.exports = model('Post',Post)
