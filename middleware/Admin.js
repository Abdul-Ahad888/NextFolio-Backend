const dotenv = require('dotenv')
dotenv.config()

const jwt = require('jsonwebtoken')

const verifyAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) return res.status(403).send("No Token");
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      console.log(err);
      return res.status(403).send("Invalid Token");
    }
  };

module.exports = verifyAdmin