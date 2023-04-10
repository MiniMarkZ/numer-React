const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('./index'); 
// const realapp = require('./index2'); 
// const { createConnection } = require('mysql2/promise');
var secretkey = "lnwza"

// jest.mock('mysql2/promise', () => ({
//   createConnection: jest.fn(),
// }));

// describe('GET /getregression/:path*', () => {
//   let app, connectionMock;

//   beforeAll(() => {
//     // Create a mock database connection
//     connectionMock = {
//       query: jest.fn(),
//       end: jest.fn(),
//     };
    
//     createConnection.mockResolvedValue(connectionMock);

//     // Create the app instance
//     app = realapp.createserver();
//   });

//   afterAll(() => {
//     // Close the mock database connection
//     connectionMock.end.mockResolvedValue();
//   });

//   it('should return regression data', async () => {
//     const mockResults = [{ id: 1, method: 'polynomial', M: 2, N: 9 }];
//     connectionMock.query.mockResolvedValue([mockResults]);

//     const response = await request(app)
//       .get('/getregression/polynomial?a=1')
//       .set('Authorization', 'Bearer valid_token');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(mockResults);
//   });

//   it('should throw an error if the query fails', async () => {
//     const mockError = new Error('Database query failed');
//     connectionMock.query.mockRejectedValue(mockError);

//     const response = await request(app)
//       .get('/getregression/polynomial?a=1')
//       .set('Authorization', 'Bearer valid_token');

//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ error: 'Database error' });
//   });
// });
  

describe('GET /gettoken/:name', () => {
  
  it('responds with a token', async () => {
    const response = await request(app)
      .get('/gettoken/mark')
      .expect(200);

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
    const response = await request(app)
      .get('/test/token')
      .expect(401);

    expect(response.text).toBe('Access denied. No token provided.');
  });

  it('responds with 400 when an invalid token is provided', async () => {
    const response = await request(app)
      .get('/test/token')
      .set('authorization', 'invalid-token')
      .expect(400);

    expect(response.text).toBe('Invalid token.');
  });
});


