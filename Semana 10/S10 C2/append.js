const fs = require('fs')
let msj = 'Contenido del Append!!!\n'
fs.appendFile('created.txt', msj, {encoding:'utf8', flag:'a'}, (error) =>{
    if (error){
        console.error('No se pudo appendear el archivo')
        return
    }
    console.log(msj, ' agregado al archivo')
})