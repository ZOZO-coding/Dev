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

app.get('/magic/:phrase', (req, res) => {
    const {phrase} = req.params;
    const magic8Res = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomNum = Math.floor(Math.random() * magic8Res.length);
    if (phrase === 'Will I be a Millionaire') {
        res.send(`<h1>${magic8Res[randomNum]}</h1>`)
    } else {
        res.send('<h1>I dont understand this question</h1>')
    }
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})