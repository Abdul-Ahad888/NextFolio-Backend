const app = require('./app')
const dotenv = require('dotenv')
const sequelize = require('./config/dbconfig')

dotenv.config()

// const PORT = process.env.PORT || 5000

// sequelize.sync({ force: true  })
sequelize.sync({ force: false  })
    .then(() => {
        console.log("MySQL Connected & Synced");
    })
    // .then(() => console.log("DB synced with force: true"))
    .catch(err => console.log(err));


// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`)
// })