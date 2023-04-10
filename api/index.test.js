const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('./index'); 
var secretkey = "lnwza"

// describe('GET /gettoken/:name', () => {
//   it('responds with a token', async () => {
//     const response = await request(app).get('/gettoken/mark').expect(200);
//     const decoded = jwt.verify(response.text, secretkey);
//     expect(decoded.name).toBe("mark");
//   });
// });

// describe('GET /test/token', () => {
//   it('responds with the user name', async () => {
//     const token = jwt.sign({ name: 'mark' }, secretkey);
//     const response = await request(app).get('/test/token').set('Authorization',token)
  
//     expect(response.text).toBe('mark');
//   });

//   it('responds with 401 when no token is provided', async () => {
//     const response = await request(app)
//       .get('/test/token')
//       .expect(401);

//     expect(response.text).toBe('Access denied. No token provided.');
//   });

//   it('responds with 400 when an invalid token is provided', async () => {
//     const response = await request(app)
//       .get('/test/token')
//       .set('authorization', 'invalid-token')
//       .expect(400);

//     expect(response.text).toBe('Invalid token.');
//   });
// });


const mysql = require('mysql2');
const { mockDeep } = require('jest-mock-extended');
const mockPool = mockDeep(mysql.Pool);


// Replace the pool object with the mock object
jest.mock('./db', () => mockPool);

describe('GET /getsample/:path*', () => {
  const mockResults = [
    {id: 1, method: 'Bisection', Equation: '(x^4)-13', XL: 0, XR: 5, X0: null, X1: null},
    {id: 2, method: 'Bisection', Equation: '(x^4)-13', XL: 5, XR: 10, X0: null, X1: null}
  ];
  mockPool.query.mockResolvedValue(mockResults);
  it('should return value correct results', async () => {

    const res = await request(app).get('/getsample/Bisection');
    expect(res.body).toEqual(mockResults);
  });
});


