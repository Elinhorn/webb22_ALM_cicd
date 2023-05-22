const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('GET /', () => {
  it('Testing index endpoint', async () => {
    const response = await request(app).get('/');

    expect(response.status).to.equal(200);
  });
});

describe('GET /', () => {
  it('Testing multy route', async () => {
    const response = await request(app).get('/calc/multy/2&3');

    expect(response.status).to.equal(200);
  });
});
