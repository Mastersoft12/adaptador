const fs = require('fs');

let obtenerQueryGraphql = async (query) => {
    try {
        let archivo = await fs.readFileSync(query, 'utf-8');
        return archivo;
    }catch (e) {
        return new Error(`Error leyendo el query ${query}`);
    }
}

module.exports = {
    obtenerQueryGraphql
}
