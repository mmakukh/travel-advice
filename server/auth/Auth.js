const jwt = require("jsonwebtoken");
const config = require("./config");
const db = require("../db/model");
const User = db.user;
const Role = db.role;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token!" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Not authorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};
const authJwt = {
  verifyToken,
};
module.exports = authJwt;
