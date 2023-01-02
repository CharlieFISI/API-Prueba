const express = require("express")
const bodyParser = require("body-parser")
const e = require("express")
const app = express()

app.use(bodyParser.json())

module.exports = app

require("./rutas/clientes.js")
require("./rutas/compras.js")
require("./rutas/entrenadores.js")
require("./rutas/imc.js")
require("./rutas/personal.js")
require("./rutas/planes.js")
require("./rutas/productos.js")
require("./rutas/sesiones.js")
require("./rutas/tarjeta.js")

app.get('/', (req, res) => {
    res.send("¡Bienvenido a ChadGymAPI!")
})