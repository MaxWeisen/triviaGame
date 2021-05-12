const app = require('../Server/Server.js');
const supertest = require('supertest');
const regeneratorRuntime = require('regenerator-runtime');
const request = supertest(app)


test('Test again', async () => {
  const response = await request.get('/test');
  expect(response.status).toBe(200);
});