const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');

const app = express();

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

//Routes
app.use('/', require('./routes/main'));
app.use('/user', require('./routes/user'));

app.use((req, res) => {
   res.status(404).send('<h1>Page not found</h1>');
});

app.listen(5000, () => {
   console.log('Server started on Port 5000');
});