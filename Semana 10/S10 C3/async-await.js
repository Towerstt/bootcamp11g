function construir (muro){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            muro.construido = true
            if (muro.construido){
                resolve(muro)
            }else{
                //Crear un error - Lo que le pasemos a este objeto tipo error, es el msj que se manda
                const error = new Error('No se pudo construir')
                reject(error)
            }
        },3000)
    })
}

function aplanar (muro){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            muro.aplanado = true

            const error = muro.aplanado ? null : new Error("No se pudo aplanar")

            if(error){
                reject(error)
                return
            }

            resolve(muro)
        }, 2000)
    })
}

function pintar (muro) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            muro.pintado = true

            const error = muro.pintado ? null : new Error("No se pudo pintar")

            if(error) return reject(error) // inline if

            resolve(muro)

        }, 1000)
    })
}

async function principal(){
    const muro = await pintar(await aplanar(await construir({})))
    // const muroConstruido = await construir({})
    // const muroAplanado = await aplanar(muroConstruido)
    // const muroPintado = await pintar(muroAplanado)
    console.log(muro)
}

// principal() //Función asíncrona regresa una promesa
//     .then(() => console.log('Todo OK!!! :)\n'))
//     .catch((error) => console.error('Algo salió mal... :(\n', error)) //Regresa el error del reject correspondiente


const fs = require('fs')
const fsPromises = fs.promises

async function writingFile () {
    await fsPromises.writeFile('created-Promise.txt', 'Text in file\n', {encoding:'utf8', flag:'a'})
    await fsPromises.readFile()
    await fsPromises.copyFile()
    await fsPromises.unlink()
    await fsPromises.mkdir()
    await fsPromises.readdir()
    await fsPromises.rmdir()
}
writingFile()
    .then(() => console.log('OK'))
    .catch((error) => console.error('No se creó el archivo') )

