const { verifySignUp } = require("../auth");
const controller = require("../auth/controllers/auth.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/signup",
    [verifySignUp.anyDuplicates, verifySignUp.roleExists],
    (req, res) => {
      const body = req.body;
      console.log({ body });
      console.log("singup");
      controller.signup(req, res);
    }
  );
  app.post("/signin", controller.signin);
};
