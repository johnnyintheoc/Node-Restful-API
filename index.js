const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv/config');

// Routes
const HomeRoute = require('./routes/home.js');
const FitnessRoute = require('./routes/fitness.js');
const GiveawaysRoute = require('./routes/giveaways.js');

// Set App
app = express();

// Middleware
//app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use('/', HomeRoute);
app.use('/fitness', FitnessRoute);
app.use('/giveaways', GiveawaysRoute);

// Handlebars Configuration
app.engine("hbs", hbs({
    defaultLayout: "main",
    extname: "hbs",
    //helpers: require('./config/hbs-helpers.js'),
    partialsDir: __dirname  + "/views/partials/"
}));
app.set("view engine", "hbs");

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
    console.log('DB Connected.');
});

// Connection string given by MongoDB Atlas
/*
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected.');   
});

client.connect(err => {
  const collection = client.db("sample_youtube").collection("giveawaysListings");
  client.close();
});
*/

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
