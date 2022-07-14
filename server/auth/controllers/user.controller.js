exports.genericFeed = (req, res) => {
  res.status(200).send("Generic feed.");
};
exports.userFeed = (req, res) => {
  res.status(200).send("Custom feed.");
};
