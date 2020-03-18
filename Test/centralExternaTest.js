const expect = require('chai').expect;
const centralExterna = require('../routes/centralExterna');

describe('First test', () => {
    it('Should assert true to be true', () => {
        expect(true).to.be.true;
    });
});

describe('valida el test de los campos de entrada', () => {
    let body = {
        tipoDocumento: 'CC',
        numeroDocumento: '19574012'
    }
    it('' ,() => {
        return centralExterna.validarCamposEntrada(body).then( response => {
            expect(typeof response).to.equal('object');
            expect( response.tipoDocumento).to.equal('CC');
            expect( response.numeroDocumento).to.equal('19574012');
        })
    });
});




