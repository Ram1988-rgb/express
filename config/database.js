var mongoose = require('mongoose');
/*mongoose.connect(
  "mongodb+srv://<your user>:<your password>@opencodez-pzgjy.gcp.mongodb.net/test?retryWrites=true",
    {
      useNewUrlParser: true
    }
  );*/
  mongoose.connect(
    'mongodb://127.0.0.1/crud',
      {
        useNewUrlParser: true
      }
    );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  // we're connected!
    console.log("Connected to MongoDB database")
  });
module.exports = db;
