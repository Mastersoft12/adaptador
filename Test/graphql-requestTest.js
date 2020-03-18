const rewire = require("rewire");
const expect = require('chai').expect;
const nock = require('nock');
const response = require('./response.js');
const graphqlRequest = require('../services/graphql-request/graphql-request');


describe('obtener informacion ce test',() =>{
    beforeEach(() =>{
        nock('http://ecosistemariesgosce-api.us-east-1.elasticbeanstalk.com')
            .post('/graphql/')
            .reply(200, response);
    });

    it('Put usuario ce', ()=>{
        return graphqlRequest.sendQuery('http://ecosistemariesgosce-api.us-east-1.elasticbeanstalk.com/graphql/','','').then(reponse => {
            expect(typeof response).to.equal('object');
        })
    });
});