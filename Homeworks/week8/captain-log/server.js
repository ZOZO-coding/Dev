const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const methodOverride = require("method-override");
const logController = require('./controllers/logController')

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


app.get('/logs', logController.log_index)

app.get('/logs/new', logController.log_new)

app.get('/logs/:id/edit', logController.log_get_edit)

app.get('/logs/:id', logController.log_get_details)

app.post('/logs/', logController.log_create)

app.put('/logs/:id', logController.log_post_edit)

app.delete('/logs/:id', logController.log_delete)


