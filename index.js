const app = require("./src/app.js")
require("./src/conexion.js")
const PORT = process.env.PORT || 3050

app.listen(PORT, () => console.log(`Server corriendo en el puerto ${PORT}`))