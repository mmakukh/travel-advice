const db = require("./model");
const Role = db.role;
var _db;

module.exports = {
  connectToServer: function (callback) {
    function initial() {
      Role.estimatedDocumentCount((err, count) => {
        console.log({ err });
        console.log({ count });
        if (!err && count === 0) {
          new Role({
            name: "user2",
          }).save((err) => {
            if (err) {
              console.log("error", err);
            }
            console.log("added 'user' to roles collection");
          });
        }
      });
    }

    console.log("connecting mongoose");
    db.mongoose
      .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        _db = db.db;
        console.log("Successfully connected to MongoDB.Atlas");
        initial();
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
