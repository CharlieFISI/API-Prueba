const app = require("../app.js")
const conexion = require("../conexion.js")
//Productos
app.get('/api/tienda_virtual/v1/productos', (req, res) => {
    const sql = "SELECT * FROM producto"

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
app.get('/api/tienda_virtual/v1/productos/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM producto WHERE idProducto = ${id}`
    
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

/*
app.post('/agregar', (req, res) =>{
    const sql = "INSERT INTO producto SET ?"
    const productoObj = {
        NombreProducto: req.body.NombreProducto,
        Marca: req.body.Marca,
        Precio: req.body.Precio,
        Descripcion: req.body.Descripcion        
    }

    conexion.query(sql, productoObj, e => {
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

    conexion.query(sql, e => {
        if(e){
            throw e
        }
        res.send("Producto actualizado")
    })
})

app.delete('/eliminar/:id', (req, res) => {
    const {id} = req.params
    const sql = `DELETE FROM producto WHERE idProducto = ${id}`
    
    conexion.query(sql, e => {
        if(e){
            throw e
        }
        res.send("Producto eliminado")
    })
})
*/
