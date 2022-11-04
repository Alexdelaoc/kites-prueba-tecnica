// MIDDLEWARES //
const { CustomError } = require('../error.js')

// No está hecho aún
function routeMiddlewareQueryString(req, res, next){

    const routeNoQuery = req.route.path
    console.log(routeNoQuery)

    const routeQuery = req.route
    console.log(routeQuery);
    
    next()
};

function randomError(req, res, next){
    // Definimos los arrays con los contenidos del error.
    const errMsgs = ["No sé qué ha pasado", "A revisar código", "Ni idea de qué ha pasado", "Maldito JavaScript"];
    const errCodes = [404, 500, 400]

    // Se lanza el nuevo error, con el código y el mensaje correspondientes a un índex generado aleatoriamente.
    const err = new CustomError(errCodes[Math.floor(Math.random() * errCodes.length)], errMsgs[Math.floor(Math.random() * errMsgs.length)])
    next(err) // Pasamos el error al errorHandler.
};

// Manejamos el error, devolviéndonos la información deseada.
function errorHandler(err, req, res, next){
    res.status(err.code)
    res.json({
        error: {
            status: err.code,
            message: err.message
        }
    })
};

module.exports = {
    routeMiddlewareQueryString,
    randomError,
    errorHandler
}