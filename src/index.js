const express = require('express')
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection=require('./mongodb')
const templatePath=path.join(__dirname,'../templates')
app.use(static('public'));
app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password,
        height:req.body.height,
        weight:req.body.weight,
        gender:req.body.gender,
        email:req.body.email,
        number:req.body.num

    }

    await collection.insertMany([data])
    res.render("home")
})
app.post("/login",async(req,res)=>{
  

   try{
    const check=await collection.findOne({name:req.body.name})
    if(check.password===req.body.password){
        res.render("./New/index")

    }else{
        res.send("Wrong Password!!!")
    }
    res.render("./New/index")
   }catch{
    res.send("Wrong Details")
   }
})
app.listen(3000,()=>{
    console.log(`Port Connected at 3000`)
})