// Creamos una clase a la que aplicar los mensajes de error en el middleware.

class CustomError extends Error {
    constructor(code, message){
        super();
        this.type = 'custom_error';
        this.code = code;
        this.message = message;
    }
};

module.exports = {
    CustomError
}