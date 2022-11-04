// MIDDLEWARES //
const { CustomError } = require('../error.js')


function routeMiddlewareQueryString(req, res, next){

    const routeNoQuery = req.route.path
    console.log(routeNoQuery)

    const routeQuery = req.route
    console.log(routeQuery);
    
    next()
};

function randomError(req, res, next){

    const errMsgs = ["No sé qué ha pasado", "A revisar código", "Ni idea de qué ha pasado", "Maldito JavaScript"];

    // Se lanza un nuevo error, con el mensaje correspondiente a un índex generado aleatoriamente.
    throw new CustomError(400, errMsgs[Math.floor(Math.random() * errMsgs.length)])
    next()
}

module.exports = {
    routeMiddlewareQueryString,
    randomError
}