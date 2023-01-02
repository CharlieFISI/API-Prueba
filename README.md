# ChadGymApp-API
Esta es la API creada para la aplicacion movil del Gymnasio ChadGym, esta consta de diversos elementos ubicados en la carpeta src/rutas que permitran realizar las diversas funciones de la API
De estas carpetas en esta primera vista las mas relevantes son la carpeta src y el index.js.

* **Index.js**: Permitira enlazar la aplicacion con la conexion.
* **src**: Contendra los elementos relacionados al funcionamiento y conexion a la base de datos de la API.

## Contenido en src
Dentro de esta carpeta encontraremos lo siguiente:
* [**Rutas**](src/rutas): En este directorio encontraremos los diversos archivos que permitiran el funcionamiento de acuerdo a querys de la base de datos, estas funciones van desde registrar un nuevo cliente, revisar la informacion de un cliente, revisar la lista de entrenadores o su informacion de contacto, etc.
* [**conexion.js**](src/conexion.js): Este archivo cumple la funcion de realizar la conexion a la base de datos ubicada en Azure, para ello se hace uso de las credenciales de respectivas para que obtener una conexion exitosa.
* [**app.js**](src/app.js): Este archivo asegurara la conexion de la API.

## Contenido de rutas
Dentro de esta subcarpeta encontraremos los archivos que cumpliran funciones de la API e interactuaran con la app, tendremos funciones GET que pediran informacion y POST que ingresaran la informacion.
* [**clientes.js**](src/rutas/clientes.js): Se encuentran las funciones relacionadas a operaciones de clientes, sea esta el registro, recuperar su informacion para el login, etc.
* [**compras.js**](src/rutas/compras.js): Se encuentran las funciones relacionadas a operaciones de compras, sea esta el registro de compras, historial de un cliente, etc.
* [**entrenadores.js**](src/rutas/entrenadores.js): Se encuentran las funciones relacionadas a operaciones de entrenadores, como el listado de entrenadores o la informacion especifica de uno.
* [**imc.js**](src/rutas/imc.js): Se encuentran las funciones relacionadas a operaciones del imc, permite guardar y recuperar el valor de la imc de un cliente.
* [**personal.js**](src/rutas/personal.js): Se encuentran las funciones relacionadas a operaciones del personal del gymnasio, siendo principalmente el mostrar informacion del personal (sea administrativo o entrenador).
* [**planes.js**](src/rutas/planes.js): Se encuentra la funcion relacionada a los planes, principalmente recupera la informacion del plan de un cliente.
* [**productos.js**](src/rutas/productos.js): Se encuentrnan las funciones relacionadas a los productos que ofrece el gymnasio, permite la muestra de la lista de productos y la busqueda de un producto en especifico.
* [**sesiones.js**](src/rutas/sesiones.js): Se encuentran las funciones de las sesiones personalizadas, podremos encontrar el mostrar las sesiones agendadas, fijar fecha a una sesion y guardar un sesion.
* [**tarjeta.js**](src/rutas/tarjeta.js): Se encuentra las funciones relacionadas a las tarjetas del cliente, podra guardar los datos de su tarjeta y recuperar los datos para la compra.
