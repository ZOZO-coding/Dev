const express = require('express');

const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`Welcome back, ${req.params.name}`)
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})