const fs = require('fs')
let src = 'created.txt'
let dest = 'copied.txt'
fs.copyFile(src, dest, (error)=>{
    if (error){
        console.error('No se pudo copiar el archivo')
        return
    }
    console.log(`Archivo ${src} copiado exitosamente a ${dest}`)
})