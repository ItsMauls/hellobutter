const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema ({
    email : {
        type : String
    },
    date : Date
}
, {timestamps : true}
)

const userEmail = mongoose.model('usermail', emailSchema)

module.exports = userEmail