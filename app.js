const express = require('express')
const cors = require('cors')
const session = require('express-session')

const productRoute = require('./routes/product.route')
const adminRoute = require('./routes/AdminLogin.route')

const app = express()

app.use(cors({
    origin: "https://nextfolio-portfolio.netlify.app",
    credentials: true
}));

app.use(express.json())

// app.use('/uploads', express.static('uploads'))

app.use('/api/product', productRoute)

app.use('/', adminRoute)

app.get('/', (req, res) => {
    res.send("Server Is Running...")
})

module.exports = app    