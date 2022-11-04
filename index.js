//----------------------------------------------- 4
//Escribe una api-rest con express que tenga dos rutas, una para subir un número y otra para obtener dicho número
//Añadir un middleware que haga console.log() de la ruta total a) con querystrings b) sin querystrings
//Crear y añadir un middleware que de manera aleatoria genere un error
//Handlear el error con una function (err,req,res,next)

const express = require('express');
const app = express();
const PORT = 3000;

const { CustomError } = require('./error.js')

// MIDDLEWARES //
// Se podrían exportar a una posible carpeta de middlewares.

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    console.log("Hello world!");
})

let numArray = [];

app.post('/number/:number', async (req, res) => {
    try {
        const number = req.params.number;
        numArray.push(number);
        console.log(numArray);
        res.status(200).json({ msg: `${number} saved.` })
    } catch (error) {
        console.log(error);
    }
});

app.get('/number/:number', routeMiddlewareQueryString, async (req, res) => {
    try {
        const number = req.params.number;
        const selectedNumber = numArray.find(n => n == number)
        console.log(numArray);
        console.log(selectedNumber);
        res.status(200).json({ msg: `${selectedNumber}` })
    } catch (error) {
        console.log(error);
    }
});

app.get('/error', randomError, async (req, res) => {
    res.status(400).json({msg: "Something went wrong"})
})