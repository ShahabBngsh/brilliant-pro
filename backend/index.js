const express = require('express');
const cors = require('cors');
const dbconn = require('./db/conn');
const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes/courses'));
app.use(require('./routes/learners'));

app.use((err, req, res) => {
  // console.log(err);
  // res.status(500).send('Something went wrong!!!');
  console.log('Route does not exist ')
  // res.redirect('/api/courses');
});

const PORT = process.env.PORT || 3000;
dbconn.connectToServer(function (err) {
  if (err) {
    console.log(err.stack);
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
});