const fs = require('fs')
const fsPromises = fs.promises

fsPromises.rmdir('Dir-To-Delete', {recursive:true})
    .then(() => console.log('Carpeta Eliminada correctamente'))
    .catch((error) => console.error('No se pudo eliminar por: ', error))