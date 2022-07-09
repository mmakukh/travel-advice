const Db = process.env.ATLAS_URI;
const db = require("./model");
const Role = db.role;
var _db;

module.exports = {
  connectToServer: function (callback) {
    function initial() {
      Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
          new Role({
            name: "user",
          }).save((err) => {
            if (err) {
              console.log("error", err);
            }
            console.log("added 'user' to roles collection");
          });
        }
      });
    }

    db.mongoose
      .connect(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(function (err, db) {
        if (db) {
          _db = db.db("travel-advice");
          console.log("Successfully connected to MongoDB.Atlas");
        }
        return callback(err);
      });
  },

  getDb: function () {
    return _db;
  },
};
