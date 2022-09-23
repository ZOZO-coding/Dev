const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const Log = require('./model/logs');
const methodOverride = require("method-override");

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

app.use(methodOverride("_method"));


app.get('/logs', (req, res) => {
    Log.find().sort({createdAt: -1})
        .then((result) => {
            res.render('Index', {logs: result})
        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/logs/new', (req, res) => {
    res.send('create a new log')
})

app.get('/logs/:id', (req, res) => {
    const { id } = req.params;
    Log.findById(id)
        .then(result => {
            res.render('Show', {log: result})
        })
        .catch(err => {
            console.log(err);
            res.render('NotFound')
        })
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

app.delete('/logs/:id', (req, res) => {
    const { id } = req.params
    Log.findByIdAndDelete(id)
        .then(result => {
            res.redirect('/logs')
        })
        .catch(err => {
            console.log(err);
        })
})


