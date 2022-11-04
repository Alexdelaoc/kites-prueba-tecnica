
const { multiplicaPorDosYAceptaCallback, ciertaMultiplicacion } = require('./_promesas.js');

// es una función que hace una multiplicación (no sabemos cual) y acepta una función de callback
/* ciertaMultiplicacion(x, (y) => {
    console.log(y);
}); */

//¿ Puedes deducir qué multiplicación hace?
// SOLUCIÓN: Al ejecutar la función devuelve siempre, tras un segundo, el doble del número pasado a la función.

// ¿Puedes "wrappearla" en una funcion que se llame ciertaMultiplicacionAsync de manera que actúe como una promesa y la podamos usar con await ?

function ciertaMultiplicacionAsync(x) { // Necesitamos envolver la función ciertaMultiplicación en un nuevo objeto Promise, en el cual pasaremos el resolve al callback de la función.
    return new Promise((resolve) => {
        ciertaMultiplicacion(x, (y) => {
            resolve(y)
        });
    });
};

async function funcionOrdenada(x) {
    const resultado = await ciertaMultiplicacionAsync(x);
    console.log(resultado);
}

funcionOrdenada(25);