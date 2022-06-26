const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/travels").get(function (req, res) {
  let db_connect = dbo.getDb("travel-advice");
  db_connect
    .collection("travel-item")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/travel/:id").get(function (req, res) {
  console.log(`${req.params.id}`);
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("travel-item").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
