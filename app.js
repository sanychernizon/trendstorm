const express = require('express'),
    app = express(),
    hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// API GOOGLE TRENDS
const googleTrends = require('google-trends-api');

const optionsObject = {
    keyword: 'Phone',
    startTime: new Date(2017, 1, 15),
    endTime: new Date(2018, 12, 15)
}

googleTrends.interestOverTime(optionsObject)
    .then(function (results) {
        app.get('/', (req, res) => {
            res.send(results);
        })
    })
    .catch(function (err) {
        console.error('Oh no there was an error', err);
    });

// ROTAS
app.get('/', (req, res) => {
    res.render('index')
})


// SERVIDOR
app.listen(3000, () => console.log('Logado!'));