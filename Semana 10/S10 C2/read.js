const fs = require('fs')
fs.readFile('created.txt', {encoding: 'utf8', flag:'r'}, (error, data) =>{
    if (error){
        console.error('No se puede leer el archivo')
        return
    }
    console.log('Archivo leído')
    console.log('----------------')
    console.log(data)
})