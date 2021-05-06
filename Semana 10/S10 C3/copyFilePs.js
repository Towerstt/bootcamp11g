const fs = require('fs')
const fsPromises = fs.promises

fsPromises.copyFile('newFile.txt', 'newCopiedFile.txt')
    .then(() => console.log('Archivo copiado correctamente'))
    .catch((error) => console.error('El archivo no se pudo copiar por: ', error))