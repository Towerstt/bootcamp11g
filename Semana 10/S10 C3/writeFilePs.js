const fs = require('fs')
const fsPromises = fs.promises

fsPromises.writeFile('Dir-To-Delete/newFile2.txt', 'Text in newFile\n', {encoding:'utf8', flag:'a'})
    .then(() => console.log('Archivo Creado correctamente'))
    .catch((error) => console.error('Archivo no creado por :', error))