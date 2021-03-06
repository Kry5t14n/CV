const express = require('express')
const app = express()
port = process.env.PORT || 3000


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/skills', (req, res) => {
    res.render('skills')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/counter', (req, res) => {
    res.render('counter')
})

app.get('/dice-game', (req, res) => {
    res.render('dice-game')
})

app.get('/guess-the-number', (req, res) => {
    res.render('guess-the-number')
})

app.get('/photo-slider', (req, res) => {
    res.render('photo-slider')
})

app.get('/checkout', (req, res) => {
    res.render('checkout')
})


app.listen(port)