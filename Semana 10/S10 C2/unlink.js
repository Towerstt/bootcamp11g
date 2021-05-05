const fs = require('fs')
fs.unlink('copied.txt', (error) =>{
    if (error){
        console.error('Error al borrar el archivo')
        return
    }
    console.log('created.txt fue borrado exitosamente')
})