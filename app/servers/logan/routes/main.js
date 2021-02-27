const express = require("express")
const manifest = require("../../manifest.json")
var router = express.Router()

router.get("/", (req, res) => {
    res.send(`${manifest.logan.domain}.${process.env.SERVER_DOMAIN}`)
})

module.exports = router