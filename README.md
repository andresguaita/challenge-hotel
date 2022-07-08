# Aplicacion Reserva de habitaciones - Challenge

### En esta app tenemos backend Backend en Node JS y Express JS - Base de datos Postgres.

### A continuacion se marcan los pasos para ejecutar el proyecto.

# Para acceder a los endpoint sin descargar el proyecto usar el host : https://booking-api-andres.herokuapp.com/

# Si desea ejecutarlo en el entorno local, siga los siguientes pasos:

Copiar el proyecto en su entorno local.
Ejecutar `npm install` dentro del directorio principal para instalar las dependencias.
Tener en cuenta la configuracion de la base de datos en el archivo .env para su base de datos local.

Ejecutar `npm run dev` para ejecutar el proyecto.

Para ejecutar en entorno local usar el host : `http://localhost:3001`.

### A continuación se señalan los endpoint

##### Listar tipos de habitaciones : 
`getRooms` - Metodo GET . -> Con este enpoint obtendremos una lista de los distintos tipo de habitaciones

##### Consideraciones para crear la reserva : 
Se implemento una pequeña autenticacion con JWT, es necesario estar logueado para poder reservar,
asi que para ello es necesario ejecutar los siguientes endpoints.

`registerUser` - Metodo POST . -> Con este enpoint nos registraremos como usuario. 
-----> Request : {
    "name": "Andres Guaita",
    "password": "12345",
    "email": "andres@gmail.com",
    "documentNumber": "1032455",
    "documentType": "1" ---> Tipo de numero puede ser 1 para DNI , 2 para pasaporte , 3 para otro tipo de documento.
}

`loginUser` - Metodo POST . -> Con este enpoint nos logueamos. 
-----> Request : {
    "email": "andres@gmail.com",
    "password": "12345"
} -----> 
### En este enpoint se retorna un parametro llamado token, ese token debe ser enviado como header
### en el endpoint para crear la reserva. El header es llamado `x-token`

`createBookings` - Metodo POST . -> Creamos la reservacion ( no olvidar el header en la petición). 
-----> Request : {
    "dayStay": 5,
    "clientId": "1-1032455",
    "roomId": 1
}

`payBooking` - Metodo POST . -> Con ese endpoint podemos pagar la reservación.
-----> Request : {
    "bookingId": "8f6bd2c2-852a-43e6-bc9d-7cc5c978ce53"
}

`updateBooking` - Metodo PUT . -> Con ese endpoint podemos cancelar una reservacion para que su estado pase a eliminado.
-----> Request : {
    "bookingId": "8f6bd2c2-852a-43e6-bc9d-7cc5c978ce53"
}


`getBookings` - Metodo GET . -> Con este endpoint podemos obtener todas las reservaciones.
-----> Request : {
    "bookingId": "8f6bd2c2-852a-43e6-bc9d-7cc5c978ce53"
}

### JSON Link para respositorio en POSTMAN
https://www.getpostman.com/collections/2e3a413e92568850ff3a