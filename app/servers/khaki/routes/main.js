const express = require("express")
const util = require("../../../util.js")

var router = express.Router()

router.get("/", (req, res) => {
    res.render("home", { ip: util.getIp(req) })
})

module.exports = router