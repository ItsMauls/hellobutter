const express = require('express')
const app = express()
const path = require('path')


app.set('view engine', 'ejs')
app.set('views', 'views')

const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about');
const { default: mongoose } = require('mongoose');
const MONGODB_URI = 'mongodb+srv://maulputra09:QUGj7s9BjpeqejCG@cluster0.fupzsui.mongodb.net/helloButterDB'
require('dotenv').config({ path: './.env' });

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
  
})

mongoose.connect(MONGODB_URI)
.then(result => {
    console.log('Database Connected!')
app.listen(3000)
})
.catch(err => {
  console.log(err)
})

