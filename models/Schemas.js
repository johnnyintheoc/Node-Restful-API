const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    videoId: {type:String},
    channelId: {type:String},
    channelTitle: {type:String},
    title: {type:String,},
    description: {type:String},
    thumbnailUrl: {type:String},
    publishedAt: {type:Date}
});

const Puppies = mongoose.model('Puppies', ChannelSchema, 'puppiesListings');
const Bouldering = mongoose.model('Bouldering', ChannelSchema, 'boulderingListings');
const MovieTrailers = mongoose.model('MovieTrailers', ChannelSchema, 'movieTrailerListings');

const mySchemas = {'Puppies':Puppies, 'Bouldering':Bouldering, 'MovieTrailers':MovieTrailers};
module.exports = mySchemas;

//module.exports = Channel = mongoose.model('Channel', ChannelSchema, 'channelListings');
