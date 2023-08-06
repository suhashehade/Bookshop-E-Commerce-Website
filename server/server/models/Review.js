const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    critic: {type: Schema.Types.ObjectId, ref: 'User'},
    reviewText: String,
    book: {type: Schema.Types.ObjectId, ref: "Book"}
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;