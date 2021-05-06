const fs = require('fs')
const fsPromises = fs.promises

fsPromises.readdir('New-Dir', {withFileTypes:'txt'})
    .then((data) => console.log(data))
    .catch((error) => console.error('No se pudo leer por: ', error))