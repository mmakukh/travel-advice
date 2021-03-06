const { authJwt } = require("../auth");
const controller = require("../auth/controllers/user.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/all", controller.genericFeed);
  app.get("/user", [authJwt.verifyToken], controller.userFeed);
};
