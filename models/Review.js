const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
    },
    headline: {
        type: String,
        required: true, 
    },
    review: {
        type: String,
        required: true,
    }
})

const ReviewModel = mongoose.model("reviews", ReviewSchema)
module.exports = ReviewModel