const { resolve } = require("path");


async function toUpperCase_Async(x) {
    const resultado = x.toUpperCase();
    return resultado;
};

async function  toLowerCase_Async(x) {
    return new Promise((resolve)=>{
        const resultado = x.toLowerCase();
        setTimeout(() => {            
            resolve(resultado);
        }, 1000);
    })
};

function ciertaMultiplicacion (numero, callback) {
    const nuevoNumero = 2*numero
    setTimeout(() => {
        return callback(nuevoNumero);
    }, 1000);
};

module.exports = {toUpperCase_Async, toLowerCase_Async, ciertaMultiplicacion}