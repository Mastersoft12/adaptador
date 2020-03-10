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
    }
});

const env = process.env.NODE_ENV || 'dev';
config.loadFile(`config/file/dev.json`);
config.validate({ allowed: 'strict' });


module.exports = config;

