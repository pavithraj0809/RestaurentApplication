require('./config/index');
const bp=require('./bp');
const customer=require('./customer');

const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.urlencoded({extend:true}));
app.use(cors());


app.post('/',function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.email);
    bp.create({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email

    }).then((data)=>{
        console.log(data)
        res.status(200).send('insert sucessfully')
    })
})
app.get('/',function(req,res){
    bp.find().then((data)=>{
        res.send(data)
    })

})
app.post('/customer',function(req,res){
    console.log(req)
    customer.create({
        name:req.body.name,
        mobile:req.body.mobile,
        address:req.body.address,
        gender:req.body.gender
    }).then((data)=>{
        console.log(data)
        res.status(200).send('order insert successfully')
    })
})

app.listen(4000,function(req,res){
    console.log("I am working in port 4000");
})