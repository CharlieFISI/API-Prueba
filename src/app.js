const express = require("express")
const bodyParser = require("body-parser")
const e = require("express")
const app = express()

app.use(bodyParser.json())

module.exports = app

require("./rutas/compras.js")
require("./rutas/entrenadores.js")
require("./rutas/imc.js")
require("./rutas/planes.js")
require("./rutas/productos.js")
require("./rutas/sesiones.js")

app.get('/', (req, res) => {
    res.send("¡Bienvenido a ChadGymAPI!")
})