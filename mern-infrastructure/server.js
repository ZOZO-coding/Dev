const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top
require('dotenv').config();

// connect to the database
require('./config/database');

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));

app.use(express.json());
/* Why don't we need to mount the express.urlencoded()middleware also?
Because express.urlencodedmiddleware is used to process data submitted by a form - and we don't submit forms in a SPA. */

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Define the "Catch All" Route
// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// Note: Since this route is a "catch all" that matches every GETrequest, be sure to mount API or other routes before it!
/* 
Now the "catch all" route will serve the index.html whenever:
- A user types a path into the address bar and presses enter.
- The user refreshes the browser.
- An "external" link in an email, included on another web page, etc. to the MERN-Stack app is clicked.
*/
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// running express server
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});