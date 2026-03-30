const express = require("express")
const router = express.Router()
const contactMail = require("../controllers/contactMail");

router.post('/contact', contactMail)

module.exports = router