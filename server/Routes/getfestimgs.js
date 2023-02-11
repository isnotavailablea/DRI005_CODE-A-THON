const { response } = require("express");
const exp = require("express");
const app = exp();
const givefestimgs = exp.Router();
const imgforfestmodel = require("../Model/imgforfest");
givefestimgs.post("/", async (req, res) => {
  try {
    console.log("to get the imgs "," ",req.body);
    if (
      req.body.festivalName.toUpperCase() === "SELECT" ||
      req.body.distName.toUpperCase() === "SELECT"
    ) {
      try {
        await imgforfestmodel
          .find({ StateName: req.body.StateName })
          .then((response) => {
            if (response.length === 0) {
              res.send([{
                StateName: "was not found",
                distName: "notfound",
                festivalName: "notfound",
               theImg:"notfound"
              },]);
            } else {
              res.send(response);
            }
          });
      } catch {
        res.send([{
            StateName: "was not found",
            distName: "notfound",
            festivalName: "notfound",
           theImg:"notfound"
          },]);
        return;
      }
    } else {
      await imgforfestmodel
        .find({
          StateName: req.body.StateName.toUpperCase(),
          distName: req.body.distName.toUpperCase(),
          festivalName: req.body.festivalName.toUpperCase(),
        })
        .then((response) => {
          if (response.length === 0) {
            res.send([
                {
                    StateName: "was not found",
                    distName: "notfound",
                    festivalName: "notfound",
                   theImg:"notfound"
                  },
            ]);
          } else {
            res.send(response);
          }
        });
    }
  } catch {
    res.send([{
        StateName: "was not found",
        distName: "notfound",
        festivalName: "notfound",
       theImg:"notfound"
      },]);
    return;
  }
});
module.exports = givefestimgs
