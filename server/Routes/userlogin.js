const { response } = require("express");
const exp = require("express");
const app = exp();
const finduser = exp.Router();
const usermodel = require("../Model/users");
finduser.post("/",async (req, res) => {
    try {
      // console.log(req.body);
      await usermodel.findOne({ userName: req.body.userName , password:req.body.password}).then((response) => {
        // console.log(response)
        if(response.length===0){
           res.send("error");
        }
        else{
          res.send(response.userName);
        }
      });
    } catch (error) {
      res.send("error");
    }
  });

module.exports = finduser;