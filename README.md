# Node Restful API with MongoDB

This project shows how to create a fully functional and responsive website with Node and uses Express + Express Handlebars for handling the Routing. The responsive design uses Bootstrap 4 and Fontawesome for icons.

For handling data, it uses a NoSQL database (MongoDB Atlas - www.mongodb.com) on the cloud with a AWS Cluster.

A server side file queries the Google APIs for Youtube channel data and inserts them into MongoDB using Mongoose.
The Collections created are:
1. Puppies (node_youtube.puppiesListings) - Youtube videos with the keyword "puppies".
2. Bouldering (node_youtube.boulderingListings) - keyword "bouldering 2019".
3. Movie Trailers (node_youtube.movieTrailerListings) - keyword "new movie trailers". 

Usage
```
npm init
npm install express express-handlebars googleapis mongoose method-override body-parser dotenv
npm start
```

Importing Youtube videos into MongoDB (make sure to update keywords and Schema):
```
node getChannels.js
```

Important!
This project requires a Google API key and a MongoDB Atlas connection string.
A .env file was created (and ommited from this project) to store these private strings.
Create your .env file in the root with the following:
```
DB_URI=Your MongoDB Atlas Connection String With User/Pass
YT_API_KEY=Your Google API Key
```
