const express = require("express")
const mysql = require("mysql")
var fs = require('fs');
const serverCa = [fs.readFileSync("DigiCertGlobalRootCA.crt.pem", "utf8")]

const bodyParser = require("body-parser");
const e = require("express");

const PORT = process.env.PORT || 3050

const app = express()

app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: "chadgym.mysql.database.azure.com",
    user: "ChadGymApp",
    password: "@carlosoblitas123",
    database: "chadgym",
    port: 3306,
    ssl: {
        rejectUnauthorized: true,
        ca: serverCa
    }
})

app.get('/', (req, res) => {
    res.send("¡Bienvenido a ChadGymAPI!")
})
//Productos
app.get('/productos', (req, res) => {
    const sql = "SELECT * FROM producto"

    connection.query(sql, (e, results)=>{
        if(e){
            throw e
        }
        if(results.length > 0){
            res.json(results)
        }else{
            res.send("Sin resultados")
        }
    })
})
app.get('/productos/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM producto WHERE idProducto = ${id}`
    
    connection.query(sql, (e, results) => {
        if(e){
            throw e
        }
        if(results.length > 0){
            res.json(results)
        }else{
            res.send("Sin resultados")
        }
    })
})

app.post('/agregar', (req, res) =>{
    const sql = "INSERT INTO producto SET ?"
    const productoObj = {
        NombreProducto: req.body.NombreProducto,
        Marca: req.body.Marca,
        Precio: req.body.Precio,
        Descripcion: req.body.Descripcion        
    }

    connection.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Producto añadido")
    })
})

app.put('/actualizar/:id', (req, res) => {
    const { id } = req.params
    const {NombreProducto, Marca, Precio, Descripcion} = req.body
    const sql = `UPDATE producto SET NombreProducto = "${NombreProducto}", Marca = "${Marca}", Precio = "${Precio}", Descripcion = "${Descripcion}" WHERE idProducto = ${id}`

    connection.query(sql, e => {
        if(e){
            throw e
        }
        res.send("Producto actualizado")
    })
})

app.delete('/eliminar/:id', (req, res) => {
    const {id} = req.params
    const sql = `DELETE FROM producto WHERE idProducto = ${id}`
    
    connection.query(sql, e => {
        if(e){
            throw e
        }
        res.send("Producto eliminado")
    })
})

connection.connect(e => {
    if(e){
        throw e
    }
    console.log("Todo bien!")
})

app.listen(PORT, () => console.log(`Server corriendo en el puerto ${PORT}`))