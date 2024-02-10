//This is the backend of our server: Where we will do any processing (Nothing we can see when we load the website)


//Import modules
// This is our engine, it is saved in a variable which we will be able to use to make use of our engine
const express = require('express');

// Here we create the express applicaiton
const app = express();

// Set our view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// When the user does a get request to this route, render this file
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects')
});

app.get('/workexperience', (req, res) => {
    res.render('workexperience')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.get('/learn', (req, res) => {
    res.render('learn')
});

// project links
app.get('/portfolioprocess', (req, res) => {
    res.render('portfolioprocess')
});

app.get('/gokartprocess', (req, res) => {
    res.render('gokartprocess')
});

app.get('/materovcompetition', (req, res) => {
    res.render('materovcompetition')
});

// Start the server
app.listen(3000, function() {
    console.log('Portfolio Website app listening on port 3000')
});
