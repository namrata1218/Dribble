const express=require("express");
const mongoose=require('mongoose');
const cors =require("cors");


const app= express();
const SignupModel=require('./models/dribblesignup')
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/dribblesignup");
app.post('/login',(req,res)=>{
  const {email,password}= req.body;
  SignupModel.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }else{
        res.json("The password is incorrect")
      }
    }else{
      res.json("No record existed")
    }
  })
})

app.post('/register',(req,res)=>{
  SignupModel.create(req.body)
  .then(dribblesignups=>res.json(dribblesignups))
  .catch(err=>res.json(err))

})
app.listen(3001,()=>{
  console.log("server is on")
})













// const router=require("./router/auth-router");
// const { register } = require("./controllers/auth-controller");
// // app.use("/api/auth",router,register);
 

// const PORT=5000;
// app.listen(PORT,()=>{
//   console.log(`server is running in port:${PORT}`);
// })