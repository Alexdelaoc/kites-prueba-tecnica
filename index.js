//----------------------------------------------- 4
//Escribe una api-rest con express que tenga dos rutas, una para subir un número y otra para obtener dicho número
//Añadir un middleware que haga console.log() de la ruta total a) con querystrings b) sin querystrings
//Crear y añadir un middleware que de manera aleatoria genere un error
//Handlear el error con una function (err,req,res,next)

const express = require('express');
const app = express();
const PORT = 3000;

const { routeMiddlewareQueryString,randomError, errorHandler } = require('./middleware/middleware')


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    res.status(200).json({
        msg: "Hola desde la landing"
    })
    console.log("Hello world!");
})

let numArray = [];

app.post('/number/:number', async (req, res) => {
    try {
        const number = req.params.number;

        // Pusheamos el número de los params al array.
        numArray.push(number);
        console.log(numArray);
        res.status(200).json({ msg: `${number} saved.` })
    } catch (error) {
        console.log(error);
    }
});

app.get('/number/:number', async (req, res) => {
    try {

        // Definimos en una variable lo que serán los params
        const number = req.params.number;

        // Lo buscamos en el array de números con el método .filter(), el cuál nos devuelve el elemento que coincida con la función de callback proporcionada.
        const selectedNumber = numArray.filter(n => n == number)

        // Mostramos por consola el contenido del array.
        console.log(numArray);

        // así como el número buscado.
        console.log(selectedNumber);
        res.status(200).json({ msg: `${selectedNumber}` })
    } catch (error) {
        console.log(error);
    }
});

// Pendiente
app.get('/routes', async (req, res) => {
    res.status(200).json({
        msg: "Hola desde /routes"
    })
})

app.get('/error', randomError, errorHandler, async (req, res) => {
    res.status(400).json({msg: "Something went wrong"})
})

