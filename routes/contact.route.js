const express = require("express")
const router = express.Router()

router.post('/contact', contactMail)

module.exports = router