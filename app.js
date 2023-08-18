const express = require('express')
const app = express()
const path = require('path')
// const { createTransport } = require('nodemailer');

app.set('view engine', 'ejs')
app.set('views', 'views')

const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes)
app.use(aboutRoutes)

app.use( (error,req,res,next) => {
    const status = error.statusCode || 500
    const message = error.message
    if(!error) {
        return res.status(200)
    }
    return res.status(status)
    .json({
        message
    })
    next()
})

app.listen(3000)