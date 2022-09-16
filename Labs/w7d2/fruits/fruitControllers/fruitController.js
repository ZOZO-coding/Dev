const fruits = require('../models/fruits');

const get_fruit = (req, res) => {
    res.send(fruits);
}

const get_fruit_index = (req, res) => {
    console.log(req.params);
    const {indexOfFruitsArray} = req.params;
    res.send(fruits[indexOfFruitsArray]);
}

module.exports = {
    get_fruit,
    get_fruit_index
}