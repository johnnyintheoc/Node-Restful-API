# Node Restful API with MongoDB
This project connects to a NoSQL database (MongoDB Atlas - www.mongodb.com) and shows how to create two collections on a AWS cluster.

A node file was created to run on the server side to query Youtube API data and insert into MongoDB using Mongoose.
The following collections were created on MongoDB as an example:
1. Fitness & Health (node_youtube.fitnessListings) - Youtube videos with the keyword "fitness".
2. Giveaways (node_youtube.giveawayListings) - Youtube videos with the keyword "giveaways".

Ues Express, Handlebars, Google API, and Mongoose (MongoDB Atlas with AWS Cluster)

Usage
```
npm init
npm install express express-handlebars googleapis mongoose method-override body-parser dotenv
npm start
```

Importing Youtube videos into MongoDB!
Edit the "searchKeyword" for a different key term to search youtube videos.
```
node getChannels.js
```

Important!
This project requires a Google API key and a MongoDB Atlas connection string.
A .env file was created (and ommited from this project) to store these private strings.
Create a .env file in the root with the following:
```
DB_URI=Your MongoDB Atlas connection string with user/pass
YT_API_KEY=Your Google API key
```
