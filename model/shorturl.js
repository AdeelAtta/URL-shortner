const mongoose = require(`mongoose`);
const {Schema} = mongoose;

const urls = new Schema({
    url:{
        type:String,
        require:true
    },
    short:{
        type:String,
        required:true,
        unique:true
    },
    visitHistory:[{timeStamp: {type:Number}}],
},{timeStamp:true})

const URL = mongoose.model(`urls`,urls);

module.exports = URL;