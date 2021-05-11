const http = require('http')

const server = http.createServer((request, response) =>{
    //response.setHeader('Content-type', 'application/json')
    response.writeHead(200, {'Content-type' : 'application/json'})
    
    const jsonResponse = {msj : 'Hola a todos'}
    const jsonString = JSON.stringify(jsonResponse)
    response.write('hola\n')
    response.write(jsonString)
    response.end()
})


server.listen(8080, ()=>{
    console.log('El server está listo')
})