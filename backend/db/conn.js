const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const client = new MongoClient(process.env.CONNECT_URL, {
  useNewUrlParsers: true,
  useUnifiedTopology: true
});

let dbConn;
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err) {
        return callback(err);
      }
      if (!db) {
        return callback(null, "No db");
      }
      dbConn = db.db('brilliantpro');
      console.log("Connected to brilliantpro");
      return callback();
    });
  },
  getDb: function () {
    return dbConn;
  }
};
