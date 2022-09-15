const express = require('express');

const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`Welcome back, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const {total, tipPercentage} = req.params;
    const tip = parseFloat(total) * parseFloat(tipPercentage) / 100;
    res.send(tip.toString());
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})