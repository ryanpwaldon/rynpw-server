const express = require('express')
const router = express.Router()

const LoginController = require('../controllers/LoginController')
const RegisterController = require('../controllers/RegisterController')

router.post('/login', LoginController.post)
router.post('/register', RegisterController.post)

module.exports = router
