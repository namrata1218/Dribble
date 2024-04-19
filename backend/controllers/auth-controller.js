

const home=async(req,res)=>{
try {
    res
    .status(200)
    .send("welcome to namrata backend first lecture  using router hello.");
    
} catch (error) {
  console.log(error) ; 
}
};


const register =async(req,res)=>{
    try {
        res.status(200)
            .send("welcome to namrata backend.");
       
    } 
    catch (error) {
        res.status(400).send({msg:"page not found"})

    }
     
       
    }

 module.exports= {home,register};