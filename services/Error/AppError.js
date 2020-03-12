class AppError extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code || 500;
        this.stack = new Error().stack;
    }
}

module.exports = AppError;
