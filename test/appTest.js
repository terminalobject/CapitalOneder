var expect  = require('chai').expect;
var request = require('request');
var chaiHttp = require('chai-http');
var chai = require('chai');
var app = require('../app');
chai.use(chaiHttp);

describe('/', function() {
    it('Main page content', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err,res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    });
});