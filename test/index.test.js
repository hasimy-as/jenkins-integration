const request = require('supertest');

const app = require('../index');

describe('#index', () => {
  it('Should return success accessing root', (done) => {
    request(app).get('/').expect(200).end(done);
  });

  it('Should return not found accessing undefined', (done) => {
    request(app).get('/test').expect(404).end(done);
  });
});