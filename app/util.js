var exports = module.exports = {}

exports.getIp = (req) => {
    if (req.headers["http_cf_connecting_ip"] && process.env.CLOUDFLARE) {
        var cfip = req.headers["http_cf_connecting_ip"].trim()
        var realip = req.connection.remoteAddress

        return ((realip != cfip) ? cfip : realip)
    }
    
    return req.connection.remoteAddress
}