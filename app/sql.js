var exports = module.exports = {}

const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    host: "database",
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10
})

exports.pool = pool