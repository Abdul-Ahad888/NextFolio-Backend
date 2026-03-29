const express = require('express')
const router = express.Router()
const { login } = require('../controller/AdminLogin.controller')
const verifyToken = require('../middleware/Admin')

router.post('/admin-login', login)

router.get('/admin-data', verifyToken, (req, res) => {
    res.json({ message: "Welcome admin" });
  })

module.exports = router
