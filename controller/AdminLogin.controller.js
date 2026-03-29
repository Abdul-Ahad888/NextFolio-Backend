const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
dotenv.config();

const adminUser = process.env.ADMIN_USER
const adminPass = process.env.ADMIN_PASS

const login = (req, res) => {
    const { username, password } = req.body;

    if(username === adminUser && password === adminPass){
        const token = jwt.sign({ admin: true },
            process.env.SECRET,
            {expiresIn: "1h"}
         )
         return res.json({success : true, token})
        }

    res.status(401).json({ sucess: false })
}
  

module.exports = { login };
