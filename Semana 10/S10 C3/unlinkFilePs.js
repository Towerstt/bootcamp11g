const fs = require('fs')
const fsPromises = fs.promises

fsPromises.unlink('newCopiedFile.txt')
    .then(() => console.log('Archivo eliminado correctamente'))
    .catch((error) => console.error('Archivo no se pudo eliminar por: ', error))