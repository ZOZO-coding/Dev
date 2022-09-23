const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const methodOverride = require("method-override");
const logController = require('./controllers/logController')
const foodLogController = require('./controllers/foodLogController')

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

app.get('/', (req, res) => {
    res.render('HomePage')
})

// captain logs

app.get('/logs', logController.log_index)

app.get('/logs/new', logController.log_new)

app.get('/logs/:id/edit', logController.log_get_edit)

app.get('/logs/:id', logController.log_get_details)

app.post('/logs/', logController.log_create)

app.put('/logs/:id', logController.log_post_edit)

app.delete('/logs/:id', logController.log_delete)

// food logs

app.get('/foodlogs', foodLogController.foodLog_index)

app.get('/foodlogs/new', foodLogController.foodLog_new)

app.get('/foodlogs/:foodId/edit', foodLogController.foodLog_get_edit)

app.get('/foodlogs/:foodId', foodLogController.foodLog_get_details)

app.post('/foodlogs', foodLogController.foodLog_create)

app.put('/foodlogs/:foodId', foodLogController.foodLog_post_edit)

app.delete('/foodlogs/:foodId', foodLogController.foodLog_delete)
