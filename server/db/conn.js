const db = require("./model");
const Role = db.role;
var _db;

module.exports = {
  connectToServer: function (callback) {
    console.log("connecting mongoose");
    db.mongoose
      .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        _db = db.db;
        console.log("Successfully connected to MongoDB.Atlas");
      })
      .catch((error) => {
        console.error("Atlas error", error);
        process.exit();
      });
  },

  getDb: function () {
    return _db;
  },
};
