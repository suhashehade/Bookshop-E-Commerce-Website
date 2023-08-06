const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    cover: String,
    edition: String,
    published_date: String,
    pages: Number,
    price: Number,
    rates: [Number],
    description: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    reviews : [{type: Schema.Types.ObjectId, ref: 'Review'}],
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;