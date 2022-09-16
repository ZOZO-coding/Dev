const express = require('express');

const app = express();

const fruitControllers = require('./fruitControllers/fruitController');

app.get('/fruits/', fruitControllers.get_fruit)

app.get('/fruits/:indexOfFruitsArray', fruitControllers.get_fruit_index)


app.listen(3000, () => {
    console.log('listening to port 3000');
})