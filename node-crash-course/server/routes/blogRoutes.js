const express = require('express');
const blogController = require('../controllers/blogController');

// create a router object, like a mini app, we have to use router inside of app
const router = express.Router();

// blog routes:
router.get('/', blogController.blog_index)

// post request: the urlencoded middleware parsed the request information so that it'll return as a form which is same as what a Blog model will look like.
router.post('/', blogController.blog_details)

router.get('/create', blogController.blog_create_get)

// get a single blog
router.get('/:id', blogController.blog_create_post)

//delete request
router.delete('/:id', blogController.blog_delete)

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

module.exports = router;