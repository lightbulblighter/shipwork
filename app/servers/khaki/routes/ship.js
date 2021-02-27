const express = require("express")
const sql = require("../../../sql.js")
const util = require("../../../util.js")

var router = express.Router()

function wreck(req) {
    var wrecked = (Math.random() > 0.5)

    if (wrecked) {
        sql.pool.execute("INSERT INTO wrecks (`timestamp`, `ip`) VALUES (?, ?)", [Math.round((new Date()).getTime() / 1000), util.getIp(req)])
    }

    return wrecked
}

router.get("/chance", (req, res) => {
    res.render("ship/chance", { "wrecked": wreck(req) })
})

router.get("/wrecks", async (req, res) => {
    var result = await sql.pool.query("SELECT * FROM `wrecks`")
    var wrecks = new Intl.NumberFormat("en-US").format(result[0].length)
    var date = new Date().toISOString().replace("-", "/").split("T")[0].replace("-", "/")

    res.render("ship/wrecks", { "wrecks": wrecks, "date": date })
})

module.exports = router