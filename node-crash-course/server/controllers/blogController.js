// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_details = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((resukt) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            res.render('404', {title: 'Blog not found'})
        })
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'create a new blog'})
}

const blog_create_post = (req, res) => {
    // extrac the specific id and find the document with this id
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'Blog Details'})
        })
        .catch((err) => {
            console.log(err);
        })
}

// source to refer: https://youtu.be/VVGgacjzc2Y?t=1394
const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'})
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}