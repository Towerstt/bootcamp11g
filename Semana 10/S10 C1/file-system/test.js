const fs = require('fs')
fs.writeFile('created.txt', 'Hola desde node fs\n', {encoding:'utf8', flag:'a'}, (error) =>{
    if (error){
        console.error('No se pudo generar el archivo ', error)
    }
    console.log('Se escribió el archivo')
})


//Por cada función, deberíamos tener un script ejecutable