const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('./index'); 
var secretkey = "lnwza"

describe('GET /gettoken/:name', () => {
  it('responds with a token', async () => {
    const response = await request(app).get('/gettoken/mark').expect(200);
    const decoded = jwt.verify(response.text, secretkey);
    expect(decoded.name).toBe("mark");
  });
});

describe('GET /test/token', () => {
  it('responds with the user name', async () => {
    const token = jwt.sign({ name: 'mark' }, secretkey);
    const response = await request(app).get('/test/token').set('Authorization',token)
  
    expect(response.text).toBe('mark');
  });

  it('responds with 401 when no token is provided', async () => {
    const response = await request(app).get('/test/token');
    expect(response.text).toBe('Access denied. No token provided.');
  });

  it('responds with 400 when an invalid token is provided', async () => {
    const response = await request(app).get('/test/token').set('authorization', 'marklnwza007');

    expect(response.text).toBe('Invalid token.');
  });
});

