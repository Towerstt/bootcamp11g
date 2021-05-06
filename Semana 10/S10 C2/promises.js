//Las promesas son objetos
//Constructur

//resolve = función
//Pasa la promesa de pendiente a resuelto

//reject = función
//Pasa la promesa de pendiente a rechazada

const Promesa = new Promise((resolve, reject) =>{
    const todoOK = true
    if(todoOK){
        resolve('OK')
    }else{
        reject('No OK')
    }
})

//Los objetos promesa tienen 2 métodos:
// - then que se ejecuta cuando la promesa se resuelve satisfactoriamente
//   recibe lo que le pasamos a la función resolve()
// - catch que se ejecuta cuando la promesa se rechaza
//   recibe lo que le pasamos a la función reject()

Promesa
    .then((resultado) =>{console.log(resultado)})
    .catch((error) =>{console.log(error)})


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

            if(error) return reject(error)

            resolve(muro)

        }, 1000)
    })
}

construir({})
    .then((muroConstruido) =>{
        console.log('Muro Construido: ', muroConstruido)
        aplanar(muroConstruido)
            .then((muroAplanado) =>{
                console.log('Muro Aplanado: ', muroAplanado)
                pintar(muroAplanado)
                    .then((muroPintado) => {
                        console.log('Muro Pintado: ', muroPintado)
                    })
                    .catch((error) => console.error('Error al pintar: ', error))
            })
            .catch((error) => console.error('Error al aplanar: ', error))
    })
    .catch((error) => { console.error('Error al construir: ', error)})