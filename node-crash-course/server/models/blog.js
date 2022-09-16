const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// make our Schema, which defines the struture
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

// create model based on the Schema, name should be the singular of our collection name
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;