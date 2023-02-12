const { response } = require("express");
const exp = require("express");
const localStaymodel = require("../Model/localStay");
const app = exp();
const addlocalstay = exp.Router();
// const localStaymodel = require("../Model/localStay");
addlocalstay
.post("/",async (req,res)=>{
    try{
        try {
            const  newhot= new localStaymodel({
              distName: req.body.distName,
              StateName: req.body.StateName,
              userName: req.body.userName,
              Rent: req.body.Rent,
              Rating :req.body.Rating,
              ContactNumber :req.body.ContactNumber,
              PictureBedroom:req.body.PictureBedroom,
              PictureBathroom:req.body.PictureBathroom,
              PictureKitchen:req.body.PictureKitchen
            });
            newhot.save().then((response) => {
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
module.exports=addlocalstay;