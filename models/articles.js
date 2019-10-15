const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    img: {
        type: String
    }, 
    saved: {
        type: Boolean,
        default: false
    },
})

const scrapedData = mongoose.model("scrapedData", articleSchema);

module.exports = Articles;