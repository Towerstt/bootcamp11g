//console.log('Hola mundo!')
const nombre = "Hugo"
function hola(usr){
    return "Hola " + usr
}
console.log(hola(nombre))

function generadorDeValidadoresDeRoles (roles){
    return function (rol){
        if (roles.includes(rol)){
            console.log('Autorizado')
            switch (rol){
                case 'admin':
                    console.log('Permisos de Administrador')
                    break
                case 'user':
                    console.log('Permisos de Usuario')
                    break
                default:
                    console.log('Revise sus permisos con su administrador')
            } 
        }else{
            console.log('No Autorizado')
        }
    }
}

const soloAdmin = generadorDeValidadoresDeRoles(['admin'])
const adminYuser = generadorDeValidadoresDeRoles(['admin', 'user'])
const unknow = generadorDeValidadoresDeRoles(['manager'])
soloAdmin('admin')
soloAdmin('user')
console.log('------------------')
adminYuser('admin')
adminYuser('user')
unknow('manager')
