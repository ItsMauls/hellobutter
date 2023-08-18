const express = require('express')
const router = express.Router()
const { getHome } = require('../controller/home')
const { postEmail } = require('../controller/includes')

router.get('/', getHome)
router.post('/post', postEmail)

module.exports = router