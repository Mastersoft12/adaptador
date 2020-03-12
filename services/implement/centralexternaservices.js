const query = require('../properties-reader/properties');
const graphql = require('../graphql-request/graphql-request');
const config = require('../../config/config');
const logger = require('winston');

let consultaCentralExterna = async (clavePrimaria) => {
    try {
        let queryRepo = await query.obtenerQueryGraphql(config.get('queryce'));
        let data = await graphql.sendQuery(config.get('endpoint'), queryRepo, {clavePrimaria}/*, graphQLHeaders**/);
        const resString = JSON.stringify(data).split('\\"').join('');
        return JSON.parse(resString);
    } catch (e) {
        logger.log(e);
        throw new Error('Error en el proceso de negocio');
    }
}

module.exports = {
    consultaCentralExterna
}
