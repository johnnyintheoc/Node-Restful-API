const mongoose = require('mongoose');
const yt = require('./components/youtubeAPI.js');
const Schemas = require('./models/Schemas.js');
require('dotenv/config');

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});

const searchKeyword = 'new movie trailers'; // puppies playing, bouldering 2019, new movie trailers
const searchPart = 'snippet';
const maxResults = 20;

// update the below Schema to reflect the listing
// available Schemas: Puppies, Bouldering, MovieTrailers
const ytPromise = new Promise( (resolve, reject) => {
    const ytSearch = yt.searchByKeyword(searchKeyword, searchPart, maxResults).then( data => {
        console.log(data);
        const mapData = data.map(function(item) {
            const channel = new Schemas.MovieTrailers({
                videoId: item.id.videoId,
                channelId: item.snippet.channelId,
                channelTitle: item.snippet.channelTitle,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.medium.url,
                publishedAt: item.snippet.publishedAt
            });
            
            try {
                channel.save().then(channelData => console.log(channelData));
            } catch(err) {
                console.log('Could not save: ' + item.snippet.channelId);
            }
        });
    }).then( success => {
        resolve(success);
    });
}).then( resultMsg => {
    console.log(resultMsg);
});
