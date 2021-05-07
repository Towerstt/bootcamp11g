const http = require('http')

//Creando servidor
const server = http.createServer((request, response) =>{
    //saber qué ruta está llamando
    const path = request.url
    console.log('path: ' , path)
    
    //saber el método http con el que llamaron
    const method = request.method
    console.log('Método: ', method)

    response.write('Hola desde un servidor en node!!!')
    response.end()
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

//80 .- Puerto por defecto al que se hace la llamada HTTP
//443 .- Puerto por defecto al que se hace la llamada HTTPS
//8080 .- Puerto que se ocupa para hacer pruebas en desarrollo (80 Duplicado)