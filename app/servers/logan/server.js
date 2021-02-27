const express = require("express")

var app = express()

app.disable("x-powered-by")

app.use("/", require("./routes/main"))

module.exports.app = app