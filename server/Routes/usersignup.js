const { response } = require("express");
const exp = require("express");
const app = exp();
const identification = exp.Router();
const usermodel = require("../Model/users");
identification
.post("/", async (req, res) => {
    try {
        // console.log(req.body.userName)
    //   let thename = req.params.userName;
      await usermodel.find({ userName: req.body.userName }).then((response) => {
        if (response.length === 0) {
          try {
            const newuser = new usermodel({
              userName: req.body.userName,
              password: req.body.password,
            });
            newuser.save().then((response) => {
                    res.send(response)
            });
          } catch (err) {
            res.send("error");
            return;
          }
        } else {
          res.send("error");
          return;
        }
      });
    } catch (error) {
      res.send("error");
    }
  });

module.exports = identification;