const express = require('express');
const pokemon = require('./models/pokemon');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})


app.listen(3000, () => {
    console.log('listening to port 3000');
})