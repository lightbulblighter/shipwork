const vhost = require("vhost")
const express = require("express")
const manifest = require("./servers/manifest.json")

if (!process.env.DOCKER) {
    require("dotenv").config({
        path: require("path").join(__dirname, "../.env")
    })
}

var app = express()

for (const [name, service] of Object.entries(manifest)) {
    var domain = ""

    if (service.domain == null) {
        domain = process.env.SERVER_DOMAIN
    } else {
        domain = `${service.domain}.${process.env.SERVER_DOMAIN}`
    }
    
    app.use(vhost(
        domain,
        require(`.${service.entrypoint}`).app
    ))
}

app.listen(process.env.SERVER_PORT)
console.log(`Running ${process.env.NAME} on ${process.env.SERVER_PORT}`)