const fs = require('fs')
const fsPromises = fs.promises

fsPromises.mkdir('Dir-To-Delete')
    .then(() => console.log('Carpeta creada correctamente'))
    .catch((error) => console.error('Carpeta no se pudo crear por: ', error))