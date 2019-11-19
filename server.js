const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv/config');

// Routes
const routeHandler = require('./routes/handler.js');

// Set App
app = express();

// Middleware
//app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use('/', routeHandler);
app.use((req, res, next) => {
    res.status(404).render('404error', {style:'default', pg:'404 Page Error', brandIcon:'fa fa-exclamation-circle'});
});

// Handlebars Configuration
app.engine("hbs", hbs({
    defaultLayout: "main",
    extname: "hbs",
    //helpers: require('./config/hbs-helpers.js'),
    partialsDir: __dirname  + "/views/partials/"
}));
app.set("view engine", "hbs");

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
