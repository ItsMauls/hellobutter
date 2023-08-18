const express = require('express')
const router = express.Router()
const { getHome } = require('../controller/home')

router.get('/', getHome)

module.exports = router