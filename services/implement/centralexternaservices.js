const query = require('../properties-reader/properties');
const graphql = require('../graphql-request/graphql-request');
const config = require('../../config/config');

let consultaCentralExterna = async (clavePrimaria) => {
    try {
        let queryRepo = await query.obtenerQueryGraphql(config.get('queryce'));
        let data = await graphql.sendQuery(config.get('endpoint'), queryRepo, {clavePrimaria}/*, graphQLHeaders**/);
        const resString = JSON.stringify(data).split('\\"').join('');
        return JSON.parse(resString);
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}


//consultaCentralExterna('22861442').then(x => console.log(x)); ../properties-reader/

module.exports = {
    consultaCentralExterna
}
