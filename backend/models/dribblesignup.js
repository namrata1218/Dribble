const mongoose=require('mongoose')
const SignupSchema=new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String
})
const SignupModel=mongoose.model("dribblesignups",SignupSchema)
module.exports=SignupModel;