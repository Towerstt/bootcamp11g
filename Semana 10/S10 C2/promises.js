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
            muro.construido = false
            if (muro.construido){
                resolve(muro)
            }else{
                //Crear un error - Lo que le pasemos a este objeto tipo error, es el msj que se manda
                const error = new Error('No se pudo construir')
                reject(error)
            }
        },1000)
    })
}

const promesaRetornada = construir({})
promesaRetornada
    .then((muroConstruido) =>{console.log('Muro Construido: ', muroConstruido)})
    .catch((error) => { console.error('Error al construir: ', error)})