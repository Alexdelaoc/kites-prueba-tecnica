// MIDDLEWARES //
const { CustomError } = require('../error.js')


function routeMiddlewareQueryString(req, res, next) {

    // Ruta base.
    const baseRoute = req.route.path;

    // Query String.
    const queryString = Object.keys(req.query) + "=" + Object.values(req.query);

    // Si no hay query string, nos devuelve la ruta ruta base en formato JSON y por consola.
    if (!req.query || Object.keys(req.query).length === 0) {
        console.log(baseRoute);
        res.status(200).json({
            query_string: "no",
            route: `${baseRoute}`
        });
    } else { // Si lo hay, nos lo devuelve con la ruta completa.
        console.log(req.route);
        console.log(req.query);
        console.log(baseRoute + "?" + queryString);
        res.status(200).json({
            query_string: "yes",
            route: `${baseRoute + "?" + queryString}`
        });
    };
    next();
};

function randomError(req, res, next) {

    // Definimos los arrays con los contenidos del error.
    const errMsgs = ["No sé qué ha pasado", "A revisar código", "Ni idea de qué ha pasado", "Maldito JavaScript"];
    const errCodes = [404, 500, 400];

    // Se lanza el nuevo error, con el código y el mensaje correspondientes a un índex generado aleatoriamente.
    const err = new CustomError(errCodes[Math.floor(Math.random() * errCodes.length)], errMsgs[Math.floor(Math.random() * errMsgs.length)]);
    next(err); // Pasamos el error al errorHandler.
};

// Manejamos el error, devolviéndonos la información deseada.
function errorHandler(err, req, res, next) {
    res.status(err.code);
    res.json({
        error: {
            status: err.code,
            message: err.message
        }
    });
};

module.exports = {
    routeMiddlewareQueryString,
    randomError,
    errorHandler
}