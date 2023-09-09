const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/my-db")
.then(()=>{
    console.log("Connected to Database")
}).catch((error)=>{
    console.log(error)
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    weight:{
        type:Number,

    },
    height:{
        type:Number
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }


})
const collection =new mongoose.model("LogInCollection",LogInSchema)

module.exports=collection
