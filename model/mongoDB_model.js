const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 
const userSchema = new Schema({
    id:Number,
    name:String,
    surname:String,
    email:String,
    password:String,
});
 
const User = mongoose.model('User',userSchema)
 
module.exports=User