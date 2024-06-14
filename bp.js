const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String

})
const bp=new mongoose.model('bp',Schema);
module.exports=bp;