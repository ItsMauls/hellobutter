const express = require('express')
const router = express.Router()
const { getAbout } = require('../controller/about')

router.get('/about', getAbout)

module.exports = router