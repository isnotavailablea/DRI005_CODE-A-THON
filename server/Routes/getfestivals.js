const { response } = require("express");
const exp = require("express");
const app = exp();
const givefests = exp.Router();
const festivalmodel = require("../Model/festival");
givefests
.post("/",async (req,res)=>{
    try{
            console.log(req.body)
            await festivalmodel.find({StateName:req.body.StateName,distName:req.body.distName}).then((response)=>{
                if(response.length===0){
                    festivalmodel.find({StateName:req.body.StateName}).then((response)=>{
                        if(response.length===0){
                            res.send([{"festivalName":"error"}]);
                        }
                        else{
                            res.send(response)
                        }
                   })
                }
                else{
                    res.send(response)
                }
           })
    }
    catch{
        res.send([{"festlist":"error act"}]);
        return;
    }
})
module.exports=givefests