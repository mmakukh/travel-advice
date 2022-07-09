const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const travelItemModel = require("../db/model/travelItem.model");
const ObjectId = require("mongodb").ObjectId;
const app = express();

recordRoutes.route("/travels").get(function (req, res) {
  travelItemModel
    .find({})
    .lean()
    .exec(function (err, items) {
      console.log({ items });
      res.json(items);
    });
});

recordRoutes.route("/travel").post(async (request, response) => {
  const travel = new travelItemModel(request.body);
  console.log({ travel });
  try {
    await travel.save();
    response.send(travel);
  } catch (error) {
    response.status(500).send(error);
  }
});

recordRoutes.route("/travel/:id").get(function (req, res) {
  console.log(`${req.params.id}`);
  let myquery = { _id: ObjectId(req.params.id) };
  travelItemModel.findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
