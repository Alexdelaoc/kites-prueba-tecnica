let numArray = [];

const postNumbers = async (req, res) => {
    try {
        const number = req.params.number;

        // Pusheamos el número de los params al array.
        numArray.push(number);
        console.log(numArray);
        res.status(200).json({ msg: `${number} saved.` })
    } catch (error) {
        res.status(400).json({
            error: error
        });
        console.log(error);
    }
};

const getNumbers = async (req, res) => {
    try {

        // Definimos en una variable lo que serán los params
        const number = req.params.number;

        // Lo buscamos en el array de números con el método .filter(), el cuál nos devuelve el elemento que coincida con la función de callback proporcionada.
        const selectedNumber = numArray.filter(n => n == number);

        // Mostramos por consola el contenido del array.
        console.log(numArray);

        // así como el número buscado.
        console.log(selectedNumber);
        res.status(200).json({ msg: `${selectedNumber}` });
    } catch (error) {
        res.status(400).json({
            error: error
        });
        console.log(error);
    }
};

const getRoute = async (req, res) => {
    res.status(200);
};

const getError = async (req, res) => {
    res.status(400);
};

module.exports = {
    postNumbers,
    getNumbers,
    getRoute,
    getError
}