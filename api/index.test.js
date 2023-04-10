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


// describe('/getsample/:path*', () => {
//   it('test getsample path', async () => {
//     const response = await request(app).get('/getsample/Bisection');
//     const expectedSampleData = [
//       {
//         id: 1,
//         method: 'Bisection',
//         Equation: '(x^4)-13',
//         XL: 0,
//         XR: 5,
//         X0: null,
//         X1: null,
//       },
//       {
//         id: 2,
//         method: 'Bisection',
//         Equation: '(x^4)-13',
//         XL: 5,
//         XR: 10,
//         X0: null,
//         X1: null,
//       },
//     ];
//     const parsedResponse = JSON.parse(response.text);
//     expect(parsedResponse).toEqual(expectedSampleData);
//   });
// });

// describe('/getregression/:path*', () => {
//   it('test getsample path', async () => {
//     const responsetoken = await request(app).get('/gettoken/mark').expect(200);
//     const response = await request(app).get('/getregression/polynomial?a=1')
//     const expectedSampleData = [{ id: 1, method: 'polynomial', M: 2, N: 9, X: '65', array: '[[10,5],[15,9],[20,15],[30,18],[40,22],[50,30],[60,35],[70,38],[80,43]]' }];
//     const parsedResponse = JSON.parse(response.text);
//     expect(parsedResponse).toEqual(expectedSampleData);
//   });
// });