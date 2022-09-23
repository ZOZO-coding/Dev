const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const Log = require('./model/logs');

const app = express();

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(process.env.PORT, () => {
            console.log("listening to " + process.env.PORT);
        })
    })
    .catch(err => console.log(err))

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.get('/logs/', (req, res) => {
    res.send('Home Page')
})

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
    const log = new Log(req.body);
    log.save()
        .then(result => {
            res.redirect('/logs')
        })
        .catch(err => {console.log(err);})
})

app.put

app.delete


