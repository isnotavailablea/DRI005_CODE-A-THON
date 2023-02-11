const { response } = require("express");
const exp = require("express");
const app = exp();
const givedists = exp.Router();
const distmodel = require("../Model/dist");
givedists
.post("/",async (req,res)=>{
    try{
        // console.log(req.body)
       await distmodel.find({StateName:req.body.StateName}).then((response)=>{
            if(response.length===0){
                res.send(["error"]);
            }
            else{
                res.send(response)
            }
       })
    }
    catch{
        res.send(["error act"]);
        return;
    }
})
module.exports=givedists