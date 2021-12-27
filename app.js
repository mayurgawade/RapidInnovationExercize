const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const playerRoutes = require('./api/routes/players')

// to connect with mongoDB Altas 
mongoose.connect('mongodb+srv://mayur:mayur@node-rest-shop-e3v87.mongodb.net/test?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// to show the request logs on console ex: POST /user/login 200 3309.154 ms - 274
app.use(morgan('dev'))

// to Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/players', playerRoutes)
app.use((res, req, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})

mongoose.Promise = global.Promise;
module.exports = app;