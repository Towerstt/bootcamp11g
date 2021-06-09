const jwt = require('../lib/jwt')
const users = require('../usecases/users')

function auth(request, response, next) {
    try {
        const {
            authorization: token
        } = request.headers //Deconstruye el objeto y le reasigna un nombre a la propiedad deconstruida
        
        const isValidToken = jwt.verify(token)
    
        if (!isValidToken) {
            throw new Error('Not Authorized')
        }    
        next(isValidToken)

    } catch (error) {
        response.status(401)
        response.json({
            success : false,
            msg : 'Not Allowed',
            error : error.message
        })
    }
}

function authRoles (allowedRoles = ['admin', 'user']) {
    return async (request, response, next) =>{
        try {
            const {
                authorization: token
            } = request.headers //Deconstruye el objeto y le reasigna un nombre a la propiedad deconstruida
            
            const isValidToken = jwt.verify(token)
            
            if (!isValidToken) {
                throw new Error('Not Authorized')
            }    

            const userFound =await users.getById(isValidToken.id)
            const userRoles = userFound.role || []

            //Comparación de dos arreglos
            const isAllowedRole = userRoles.find(userRole => {
                return allowedRoles.find(allowedRole => userRole === allowedRole)
            })

            if (!isAllowedRole){
                throw new Error ('You do not have authorization')
            }

            next()
        } catch (error) {
            response.status(401)
            response.json({
                success : false,
                msg : 'Not Allowed',
                error : error.message
            })
        }
    }
}


module.exports = {
    auth,
    authRoles
}