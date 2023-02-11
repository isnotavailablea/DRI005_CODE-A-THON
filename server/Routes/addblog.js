const { response } = require("express");
const exp = require("express");
const app = exp();
const addblogs = exp.Router();
const blogmodel = require("../Model/blog");
addblogs
.post("/",async (req,res)=>{
    try{
        try {
            const newblog = new blogmodel({
              distName: req.body.distName,
              StateName: req.body.StateName,
              userName: req.body.userName,
              rating: req.body.rating,
              festivalName:req.body.festivalName,
              content:req.body.content,
              Title:req.body.Title
            });
            newblog.save().then((response) => {
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
module.exports=addblogs;