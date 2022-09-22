const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.get('/logs/')

app.get('/logs/details')

app.get('/logs/new', (req, res) => {
    res.render('New')
})

app.post('/logs/', (req, res) => {
    // toggle isBroken to boolean
    if (req.body.isBroken === 'on') {
        req.body.isBroken = true;
    } else {
        req.body.isBroken = false;
    }

    res.send(req.body)
})

app.put

app.delete


app.listen(process.env.PORT, () => {
    console.log("listening to " + process.env.PORT);
})