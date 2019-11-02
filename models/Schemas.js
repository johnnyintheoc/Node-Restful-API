const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    channelId: {type:String},
    channelTitle: {type:String},
    title: {type:String,},
    description: {type:String},
    thumbnailUrl: {type:String},
    publishedAt: {type:Date}
});

const Fitness = mongoose.model('Fitness', ChannelSchema, 'fitnessListings');
const Giveaways = mongoose.model('Giveaways', ChannelSchema, 'giveawayListings');

const mySchemas = {'Fitness':Fitness, 'Giveaways':Giveaways};
module.exports = mySchemas;

//module.exports = Channel = mongoose.model('Channel', ChannelSchema, 'channelListings');
