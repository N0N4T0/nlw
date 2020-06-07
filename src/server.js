const express = require("express")
const server = express()

//configura pasta publica
server.use(express.static("public"))

//utilizando template engine
//nunjucks = html com esteroides
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos na aplicação
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//start servidor
server.listen(3000)