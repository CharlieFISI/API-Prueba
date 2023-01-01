const app = require("../app.js")
const conexion = require("../conexion.js")
//Compras
app.get('/api/tienda_virtual/v1/compras', (req, res) => {
    const sql = "SELECT * FROM compra"

    conexion.query(sql, (e, results)=>{
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
app.get('/api/tienda_virtual/v1/compras/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM compra WHERE idcliente = ${id}`
    
    conexion.query(sql, (e, results) => {
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
app.post('/api/tienda_virtual/v1/comprar', (req, res) =>{
    const sql = "INSERT INTO compra SET ?"
    const hoy = new Date()
    const productoObj = {
        idCompra: req.body.idCompra,
        idcliente: req.body.idcliente,
        Fecha: hoy,
        Tipo: req.body.Tipo
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Compra añadido")
    })
})
app.post('/api/tienda_virtual/v1/comprar/planes', (req, res) => {
    const sql = "INSERT INTO planesxcompra SET ?"
    const productoObj = {
        idCompra: req.body.idCompra,
        idPlan: req.body.idPlan,
        duracion: req.body.duracion
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Compra de plan añadida")
    })
})
app.post('/api/tienda_virtual/v1/comprar/sesiones', (req, res) => {
    const sql = "INSERT INTO planesxcompra SET ?"
    const productoObj = {
        idCompra: req.body.idCompra,
        idCompraXSesiones: req.body.idCompraXSesiones,
        CantidadSesiones: req.body.CantidadSesiones
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Compra de plan añadida")
    })
})
app.post('/api/tienda_virtual/v1/comprar/productos', (req, res) => {
    const sql = "INSERT INTO planesxcompra SET ?"
    const productoObj = {
        idCompra: req.body.idCompra,
        idproductos: req.body.idproductos,
        PrecioParcial: req.body.PrecioParcial,
        Cantidad: req.body.Cantidad
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Compra de plan añadida")
    })
})