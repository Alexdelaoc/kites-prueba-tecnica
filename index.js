//-----------------------------------------------
//Escribe una api-rest con express que tenga dos rutas, una para subir un número y otra para obtener dicho número
//Añadir un middleware que haga console.log() de la ruta total a) con querystrings b) sin querystrings
//Crear y añadir un middleware que de manera aleatoria genere un error
//Handlear el error con una function (err,req,res,next)

const express = require('express');
const { postNumbers, getNumbers, getRoute, getError } = require('./controllers/controllers');
const { routeMiddlewareQueryString, randomError, errorHandler } = require('./middleware/middleware');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    res.status(200).json({
        msg: "Hola desde la landing"
    });
    console.log("Hello world!");
});

app.post('/number/:number', postNumbers);
app.get('/number/:number', getNumbers);
app.get('/routes', routeMiddlewareQueryString, getRoute);
app.get('/error', randomError, errorHandler, getError);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});