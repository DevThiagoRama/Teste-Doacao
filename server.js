var express = require("express")
var server = express()

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

var nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

var donors = [
    {
        name: "Thiago Rama",
    },
    {
        name: "Emerson Ciani",
    },
    {
        name: "Adilson Marques",
    },
    {
        name: "Taina Comelli",
    },
]

server.get("/", function(req, res) {
    return res.render("index.html", {donors})
})

server.post("/", function(req, res) {
    var name = req.body.name
    var email = req.body.email
    var celular = req.body.celular

    donors.push({
        name: name
    })
    return res.redirect("/")
})

server.listen(3000, function() {
    console.log("iniciei o servidor")
})