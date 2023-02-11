const { response } = require("express");
const exp = require("express");
const app = exp();
const addfestival = exp.Router();
const festivalmodel = require("../Model/festival");
addfestival
.post("/",async (req,res)=>{
    try{
        // console.log(req.body)
        try {
            const newfest = new festivalmodel({
              distName: req.body.distName,
              StateName: req.body.StateName,
              festivalName: req.body.festivalName,
            });
            newfest.save().then((response) => {
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
module.exports=addfestival;