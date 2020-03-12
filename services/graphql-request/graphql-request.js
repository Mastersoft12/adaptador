const { GraphQLClient } = require('graphql-request');// https://www.npmjs.com/package/graphql-request
const AppError = require('../Error/AppError');


let sendQuery = async (graphQLEndPoint, graphQLQuery, graphQLVariables, graphQLHeaders) => {
    try {
        const client = new GraphQLClient(graphQLEndPoint, { headers: graphQLHeaders });
        const data = await client.request(graphQLQuery, graphQLVariables);
        return data;
    } catch (err) {
        if (!err.response || !err.response.status || !err.response.errors) {
            throw new AppError(JSON.stringify(err), 500);
        }
    }
}

module.exports ={
    sendQuery
}
