const express = require("express")
const bodyParser = require("body-parser")
const e = require("express")
const app = express()

app.use(bodyParser.json())

module.exports = app

require("./rutas/productos.js")
require("./rutas/planes.js")
require("./rutas/imc.js")

app.get('/', (req, res) => {
    res.send("¡Bienvenido a ChadGymAPI!")
})