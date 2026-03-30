const express = require("express")
const router = express.Router()
const contactMail = require("../controller/contact.controller");

router.post('/contact', contactMail)

module.exports = router