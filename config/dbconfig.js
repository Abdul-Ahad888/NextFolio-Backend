const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
const mysql2 = require("mysql2")

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: process.env.DB_DIALECT,
    dialectModule: mysql2
});

module.exports = sequelize;
