const convict = require('convict');

var config = convict({
    env: {
        doc: 'Ambiente de ejecución',
        format: ['prod', 'dev', 'cert'],
        default: 'dev',
        env: 'NODE_ENV',
    },
    port: {
        doc: 'Puerto de ejecución de la app.',
        format: 'port',
        default: 3000,
        env: 'PORT',
        arg: 'port'
    },
    queryce: {
        doc: 'Query graphql para informacion central externa',
        format: String,
        env: 'QUERYCE',
        default: '',
        arg: 'queryce'
    },
    endpoint: {
        doc: 'Endpoint graphql productizar',
        format: String,
        env: 'ENDPOINT',
        default: '',
        arg: 'endpoint'
    }

});

const env = process.env.NODE_ENV || 'dev';
config.loadFile(`config/file/${env}.json`);
config.validate({ allowed: 'strict' });


module.exports = config;

