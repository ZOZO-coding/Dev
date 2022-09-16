const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// import router
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://Zozo-coding:hzmrEV6LwQ6MtEvi@cluster0.jnhcp.mongodb.net/nodeTutorial?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    // because it returns a Promise, we can chain .then and run app.listen after we made connection to the database.
    .then((result) => 
    // listen for requests
    app.listen(3000, () => {
        console.log('listening for port 3000');
    }))
    .catch((err) => console.log(err))

// select ejs as view engine
app.set('view engine', 'ejs');
// to change the default view directory
// app.set('views', 'myviews')

// middleware
// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ' + req.hostname);
//     console.log('path: ' + req.path);
//     console.log('method: ', req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// })

// express built in middleware for static files such as style.css:
app.use(express.static('public'));

// middleware to pass information from ejs file components like information from a form to server
app.use(express.urlencoded({extended: true}));

// middleware use 3rd party package: morgan
app.use(morgan('dev'));

// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     // return a Promise, save it to the database we connected
//     blog.save()
//         // the order is: we save the newly created blog into our database, and once it's saved, we then send back that result using res.send.
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// // get all blogs:
// app.get('/all-blogs', (req, res) => {
//     // async
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// // get a single blog
// app.get('/single-blog', (req, res) => {
//     // async
//     Blog.findById("6320cfc31c2353f2b348e3e6")
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// basic routes:
app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // express is going to look at the view dir and find the index page
    // const blogs = [
    //     {title: 'blog1', snippet:'this is the content haha'},
    //     {title: 'blog2', snippet:'this is the content haha'},
    //     {title: 'blog3', snippet:'this is the content haha'},
    // ]
    // res.render('index', { title: 'home', blogs});
    res.redirect('./blogs');
})

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    res.render('about', { title: 'about'});
})

// blog routes: through a middleware to use the new router just created
app.use('/blogs', blogRoutes);

// 404 page
// app.use will execute for every single request, if the code reaches this point
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
})