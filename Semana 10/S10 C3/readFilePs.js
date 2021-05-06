const fs = require('fs')
const fsPromises = fs.promises

fsPromises.readFile('newFile.txt', {encoding:'utf8', flag:'r'})
    .then((data) => console.log('El archivo contiene: ', data))
    .catch((error) => console.error('Archivo no se puede leer por: ', error))