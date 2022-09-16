const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let startingBugs = 99;
    res.render('home', {startingBugs})
})

app.get('/:bugs', (req, res) => {
    let {bugs} = req.params;
    if (bugs > 0) {
        res.render('new_bug', {bugs})
    } else {
        res.redirect('/')
    }
    
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})