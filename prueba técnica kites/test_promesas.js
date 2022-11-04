const {toLowerCase_Async, toUpperCase_Async} = require('./_promesas.js');


// toLowerCase_Async es una promesa que al resolver devuelve el string con todas las letras minúsculas
// toUpperCase_Async es una promesa que al resolver devuelve el string con todas las letras mayúsculas



//esrcibe una función que imprime la frase "SoY Un STRing CON toDo TIpo DE letRas" primero en minuscula, luego en mayúsuclas y después la versión original, usando las funciones importadas

const stringRara = "SoY Un STRing CON toDo TIpo DE letRas"

async function printAllCombinations(_string) {
    try {
        const resultadoMinúsculas = await toLowerCase_Async(_string);
        console.log(resultadoMinúsculas);
        const resultadoMayúsculas = await toUpperCase_Async(_string);
        console.log(resultadoMayúsculas);
        console.log(_string)
    } catch (error) {
        console.log(error)
    }
};

printAllCombinations("SoY Un STRing CON toDo TIpo DE letRas");