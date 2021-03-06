const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var mysql = require('mysql');
const MongoClient = require('mongodb').MongoClient;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Money Talks." });
});

require("./app/routes/app.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//mysql code

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cs411",
  database: "testdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});


//updates testtable from testdb
  var sql = "UPDATE testtable SET string = 'Canyon 123' WHERE id = 1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });

//mongodb code

const uri = "mongodb+srv://root:cs411@cluster0.k1mp1.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected to MongoDB")
  client.close();
});
