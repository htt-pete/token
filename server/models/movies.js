var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Movie = new Schema({
    title: String,
    rating: Number,
    imgUrl: String,
    thumbUrl: String
});

module.exports =  mongoose.model('Movie', Movie);
