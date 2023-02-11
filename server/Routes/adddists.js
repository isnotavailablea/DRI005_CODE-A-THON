const { response } = require("express");
const exp = require("express");
const app = exp();
const adddists = exp.Router();
const distmodel = require("../Model/dist");
adddists
.post("/",async (req,res)=>{
    try{
        try {
            const newdist = new distmodel({
              distName: req.body.distName,
              StateName: req.body.StateName,
            });
            newdist.save().then((response) => {
                    res.send("ok")
            });
          } catch (err) {
            res.send("error");
            return;
          }
    }
    catch{
        res.send("error");
        return;
    }
})
module.exports=adddists;