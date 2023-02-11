const { response } = require("express");
const exp = require("express");
const app = exp();
const addimgfests = exp.Router();
const imgforfestmodel = require("../Model/imgforfest");
addimgfests
.post("/",async (req,res)=>{
    try{
        try {
            const newimgfest = new imgforfestmodel({
              distName: req.body.distName,
              StateName: req.body.StateName,
              festivalName: req.body.festivalName,
              theImg :req.body.theImg
            });
            newimgfest.save().then((response) => {
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
module.exports=addimgfests;