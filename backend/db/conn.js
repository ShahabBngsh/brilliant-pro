const { MongoClient } = require('mongodb');
// require('dotenv').config()
// console.log(process.env.CONNECT_URL)
// dotenv.config({ path: '../.env' });
const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
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
