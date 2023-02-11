const { response } = require("express");
const exp = require("express");
const app = exp();
const giveblogs = exp.Router();
const blogmodel = require("../Model/blog");
giveblogs.post("/", async (req, res) => {
  try {
    console.log(req.body);
    if (
      req.body.festivalName.toUpperCase() === "SELECT" ||
      req.body.distName.toUpperCase() === "SELECT"
    ) {
      try {
        await blogmodel
          .find({ StateName: req.body.StateName })
          .then((response) => {
            if (response.length === 0) {
              res.send([{
                StateName: "was not found",
                distName: "notfound",
                festivalName: "notfound",
                userName: "notfound",
                content:
                  "Lacinia massa. Porta nascetur dignissim scelerisque cubilia sed lectus purus fermentum sapien montes felis nunc ullamcorper bibendum primis. Vehicula volutpat velit viverra fermentum venenatis libero felis aliquam felis odio enim primis hendrerit ultricies libero metus scelerisque taciti dapibus dis primis montes lobortis primis. Imperdiet. Pellentesque urna primis justo, blandit mauris consequat mattis praesent cum accumsan lorem felis nunc nisl sociis Parturient. Ultricies phasellus egestas. Luctus. Ultrices. Accumsan dui nec mauris convallis ridiculus. Conubia morbi. Tellus porta consectetuer senectus libero fusce aliquam. Gravida sagittis dui, ac est, libero velit bibendum sodales neque diam purus. Mus aenean. Magna id turpis metus etiam gravida.Dui id rhoncus ullamcorper ut posuere dapibus. Suscipit natoque sociosqu ligula quisque, nullam nullam est turpis diam maecenas pulvinar. Posuere habitasse sed augue in suspendisse purus pulvinar pharetra fermentum nonummy quam ligula. Odio semper nibh pharetra dis. Lorem torquent consectetuer nonummy cursus Potenti posuere rutrum ultricies ipsum metus tempor massa. Sociosqu platea sodales quisque nisi cum sit parturient luctus vitae magnis. Iaculis curabitur tortor id morbi sollicitudin amet velit aliquet venenatis fermentum interdum velit enim gravida senectus maecenas. Malesuada ultricies curabitur mollis lorem euismod, nam tellus, ligula dictumst condimentum placerat per vitae, ridiculus montes bibendum mattis ad lorem venenatis vulputate primis magna elit, molestie venenatis mollis consectetuer ligula consectetuer sociosqu vitae imperdiet primis habitant lacus hymenaeos, aptent orci tempus sollicitudin placerat mus sodales lacus nonummy, tortor augue. Ad sem ipsum euismod diam metus est vel tempor. Blandit interdum auctor facilisi consectetuer vestibulum. Lorem rhoncus ullamcorper potenti. Inceptos facilisi sollicitudin. Quis. Venenatis vehicula sagittis dui inceptos. Et. Rhoncus nibh. Sagittis tincidunt magna lorem luctus blandit eget nullam habitant aenean. Ultrices taciti. Feugiat montes facilisis purus. Sollicitudin aenean a ac ullamcorper aliquet ad. Posuere maecenas viverra tristique morbi ultricies ultrices. Porta convallis ligula ornare etiam sapien magnis natoque magnis semper, feugiat fames. Et adipiscing Augue tempus lorem tellus nunc consectetuer. Aptent pellentesque sodales laoreet convallis congue semper eleifend elementum torquent phasellus nullam rutrum platea rutrum vivamus aliquam torquent, auctor senectus bibendum vel inceptos scelerisque faucibus venenatis porta.Pellentesque Sem consequat cum accumsan parturient eu. Condimentum vel tellus dis. Hac at lacinia amet id curae; iaculis inceptos, et aliquam vehicula mi ullamcorper sollicitudin et faucibus pharetra tincidunt nostra purus praesent. Aliquam tincidunt eros fringilla ipsum Consequat turpis porttitor, placerat torquent posuere libero. Nibh mus. Urna dolor velit Primis urna blandit. Inceptos cras velit habitasse felis aliquet at lorem condimentum enim phasellus neque eleifend non. Torquent. Aptent. Nostra congue. Litora ut habitasse duis aptent quam tempus ullamcorper mattis ultrices morbi morbi arcu nunc ridiculus feugiat ridiculus ultricies, amet primis cubilia pharetra aenean et ullamcorper senectus magnis mauris laoreet sapien elit lobortis. Mus sed diam feugiat sem aptent nascetur habitasse quis orci suspendisse cum sapien felis senectus tincidunt congue fusce condimentum. Dictumst aliquet pulvinar velit habitant semper sociis volutpat rhoncus nunc hac laoreet habitasse bibendum fames aptent cursus lectus lobortis ornare ad lectus ad primis. Sem quam pede. Praesent proin magnis tempus ultricies gravida nostra class, libero, viverra taciti etiam mattis penatibus sodales vehicula.",
                Title:"notfound",
                rating:8
              },]);
            } else {
              res.send(response);
            }
          });
      } catch {
        res.send(["error act"]);
        return;
      }
    } else {
      await blogmodel
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
                userName: "notfound",
                content:
                  "Lacinia massa. Porta nascetur dignissim scelerisque cubilia sed lectus purus fermentum sapien montes felis nunc ullamcorper bibendum primis. Vehicula volutpat velit viverra fermentum venenatis libero felis aliquam felis odio enim primis hendrerit ultricies libero metus scelerisque taciti dapibus dis primis montes lobortis primis. Imperdiet. Pellentesque urna primis justo, blandit mauris consequat mattis praesent cum accumsan lorem felis nunc nisl sociis Parturient. Ultricies phasellus egestas. Luctus. Ultrices. Accumsan dui nec mauris convallis ridiculus. Conubia morbi. Tellus porta consectetuer senectus libero fusce aliquam. Gravida sagittis dui, ac est, libero velit bibendum sodales neque diam purus. Mus aenean. Magna id turpis metus etiam gravida.Dui id rhoncus ullamcorper ut posuere dapibus. Suscipit natoque sociosqu ligula quisque, nullam nullam est turpis diam maecenas pulvinar. Posuere habitasse sed augue in suspendisse purus pulvinar pharetra fermentum nonummy quam ligula. Odio semper nibh pharetra dis. Lorem torquent consectetuer nonummy cursus Potenti posuere rutrum ultricies ipsum metus tempor massa. Sociosqu platea sodales quisque nisi cum sit parturient luctus vitae magnis. Iaculis curabitur tortor id morbi sollicitudin amet velit aliquet venenatis fermentum interdum velit enim gravida senectus maecenas. Malesuada ultricies curabitur mollis lorem euismod, nam tellus, ligula dictumst condimentum placerat per vitae, ridiculus montes bibendum mattis ad lorem venenatis vulputate primis magna elit, molestie venenatis mollis consectetuer ligula consectetuer sociosqu vitae imperdiet primis habitant lacus hymenaeos, aptent orci tempus sollicitudin placerat mus sodales lacus nonummy, tortor augue. Ad sem ipsum euismod diam metus est vel tempor. Blandit interdum auctor facilisi consectetuer vestibulum. Lorem rhoncus ullamcorper potenti. Inceptos facilisi sollicitudin. Quis. Venenatis vehicula sagittis dui inceptos. Et. Rhoncus nibh. Sagittis tincidunt magna lorem luctus blandit eget nullam habitant aenean. Ultrices taciti. Feugiat montes facilisis purus. Sollicitudin aenean a ac ullamcorper aliquet ad. Posuere maecenas viverra tristique morbi ultricies ultrices. Porta convallis ligula ornare etiam sapien magnis natoque magnis semper, feugiat fames. Et adipiscing Augue tempus lorem tellus nunc consectetuer. Aptent pellentesque sodales laoreet convallis congue semper eleifend elementum torquent phasellus nullam rutrum platea rutrum vivamus aliquam torquent, auctor senectus bibendum vel inceptos scelerisque faucibus venenatis porta.Pellentesque Sem consequat cum accumsan parturient eu. Condimentum vel tellus dis. Hac at lacinia amet id curae; iaculis inceptos, et aliquam vehicula mi ullamcorper sollicitudin et faucibus pharetra tincidunt nostra purus praesent. Aliquam tincidunt eros fringilla ipsum Consequat turpis porttitor, placerat torquent posuere libero. Nibh mus. Urna dolor velit Primis urna blandit. Inceptos cras velit habitasse felis aliquet at lorem condimentum enim phasellus neque eleifend non. Torquent. Aptent. Nostra congue. Litora ut habitasse duis aptent quam tempus ullamcorper mattis ultrices morbi morbi arcu nunc ridiculus feugiat ridiculus ultricies, amet primis cubilia pharetra aenean et ullamcorper senectus magnis mauris laoreet sapien elit lobortis. Mus sed diam feugiat sem aptent nascetur habitasse quis orci suspendisse cum sapien felis senectus tincidunt congue fusce condimentum. Dictumst aliquet pulvinar velit habitant semper sociis volutpat rhoncus nunc hac laoreet habitasse bibendum fames aptent cursus lectus lobortis ornare ad lectus ad primis. Sem quam pede. Praesent proin magnis tempus ultricies gravida nostra class, libero, viverra taciti etiam mattis penatibus sodales vehicula.",
                Title:"notfound",
                rating:8
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
      userName: "notfound",
      content:
        "Lacinia massa. Porta nascetur dignissim scelerisque cubilia sed lectus purus fermentum sapien montes felis nunc ullamcorper bibendum primis. Vehicula volutpat velit viverra fermentum venenatis libero felis aliquam felis odio enim primis hendrerit ultricies libero metus scelerisque taciti dapibus dis primis montes lobortis primis. Imperdiet. Pellentesque urna primis justo, blandit mauris consequat mattis praesent cum accumsan lorem felis nunc nisl sociis Parturient. Ultricies phasellus egestas. Luctus. Ultrices. Accumsan dui nec mauris convallis ridiculus. Conubia morbi. Tellus porta consectetuer senectus libero fusce aliquam. Gravida sagittis dui, ac est, libero velit bibendum sodales neque diam purus. Mus aenean. Magna id turpis metus etiam gravida.Dui id rhoncus ullamcorper ut posuere dapibus. Suscipit natoque sociosqu ligula quisque, nullam nullam est turpis diam maecenas pulvinar. Posuere habitasse sed augue in suspendisse purus pulvinar pharetra fermentum nonummy quam ligula. Odio semper nibh pharetra dis. Lorem torquent consectetuer nonummy cursus Potenti posuere rutrum ultricies ipsum metus tempor massa. Sociosqu platea sodales quisque nisi cum sit parturient luctus vitae magnis. Iaculis curabitur tortor id morbi sollicitudin amet velit aliquet venenatis fermentum interdum velit enim gravida senectus maecenas. Malesuada ultricies curabitur mollis lorem euismod, nam tellus, ligula dictumst condimentum placerat per vitae, ridiculus montes bibendum mattis ad lorem venenatis vulputate primis magna elit, molestie venenatis mollis consectetuer ligula consectetuer sociosqu vitae imperdiet primis habitant lacus hymenaeos, aptent orci tempus sollicitudin placerat mus sodales lacus nonummy, tortor augue. Ad sem ipsum euismod diam metus est vel tempor. Blandit interdum auctor facilisi consectetuer vestibulum. Lorem rhoncus ullamcorper potenti. Inceptos facilisi sollicitudin. Quis. Venenatis vehicula sagittis dui inceptos. Et. Rhoncus nibh. Sagittis tincidunt magna lorem luctus blandit eget nullam habitant aenean. Ultrices taciti. Feugiat montes facilisis purus. Sollicitudin aenean a ac ullamcorper aliquet ad. Posuere maecenas viverra tristique morbi ultricies ultrices. Porta convallis ligula ornare etiam sapien magnis natoque magnis semper, feugiat fames. Et adipiscing Augue tempus lorem tellus nunc consectetuer. Aptent pellentesque sodales laoreet convallis congue semper eleifend elementum torquent phasellus nullam rutrum platea rutrum vivamus aliquam torquent, auctor senectus bibendum vel inceptos scelerisque faucibus venenatis porta.Pellentesque Sem consequat cum accumsan parturient eu. Condimentum vel tellus dis. Hac at lacinia amet id curae; iaculis inceptos, et aliquam vehicula mi ullamcorper sollicitudin et faucibus pharetra tincidunt nostra purus praesent. Aliquam tincidunt eros fringilla ipsum Consequat turpis porttitor, placerat torquent posuere libero. Nibh mus. Urna dolor velit Primis urna blandit. Inceptos cras velit habitasse felis aliquet at lorem condimentum enim phasellus neque eleifend non. Torquent. Aptent. Nostra congue. Litora ut habitasse duis aptent quam tempus ullamcorper mattis ultrices morbi morbi arcu nunc ridiculus feugiat ridiculus ultricies, amet primis cubilia pharetra aenean et ullamcorper senectus magnis mauris laoreet sapien elit lobortis. Mus sed diam feugiat sem aptent nascetur habitasse quis orci suspendisse cum sapien felis senectus tincidunt congue fusce condimentum. Dictumst aliquet pulvinar velit habitant semper sociis volutpat rhoncus nunc hac laoreet habitasse bibendum fames aptent cursus lectus lobortis ornare ad lectus ad primis. Sem quam pede. Praesent proin magnis tempus ultricies gravida nostra class, libero, viverra taciti etiam mattis penatibus sodales vehicula.",
      Title:"notfound",
      rating:8
    },]);
    return;
  }
});
module.exports = giveblogs;
