const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    name:String,
    mobile:Number,
    address:String,
    gender:String

})
const customer=new mongoose.model('customer',Schema);
module.exports=customer;