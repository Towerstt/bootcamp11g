const http = require('http')
//80 .- Puerto por defecto al que se hace la llamada HTTP
//443 .- Puerto por defecto al que se hace la llamada HTTPS
//8080 .- Puerto que se ocupa para hacer pruebas en desarrollo (80 Duplicado)

//---------------------------- PRÁCTICA ----------------------------------------------
//Ejercicio 1
const server = http.createServer((request, response) =>{
    //saber qué ruta está llamando
    const path = request.url
    console.log('path: ' , path, typeof(path))
    
    //saber el método http con el que llamaron
    const method = request.method
    console.log('Método: ', method, typeof(method))

    //response.write('Hola desde un servidor en node!!!')
    
    if(path === '/koder'){
        if (method == 'GET'){
            response.write('Aquí están todos los Koders')
        }
        else if (method == 'POST'){
            response.write('Aquí puedes crear Koders')
        }
    }else{
        response.write('No estaba preparado para esto')
    }

    response.end()
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})