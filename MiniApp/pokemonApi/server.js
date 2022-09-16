const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/:id', (req, res) => {
    const id = req.params;
})


app.listen(3000, () => {
    console.log('listening to port 3000');
})