const express = require('express');
const port = 8080;
var cors = require('cors')
const app = express();
// const equations = require('./data/equation.json');
app.use(cors())
var secretkey = "lnwza"
var jwt = require('jsonwebtoken');
// var token = jwt.sign({ name: 'mark' }, secretkey);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//--เชื่อม database mysql -- 
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: '127.0.0.1' || process.env.DB_HOST,
  user: 'root' || process.env.DB_USER,
  database: 'numer' || process.env.DB_NAME,
  password: "" || process.env.DB_PASSWORD,
});

// //---------------------- 
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

app.get('/users', function (req, res) {
  pool.query('SELECT * FROM equation', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});



app.get('/getsample/:path*', (req, res) => {
  var path = req.params.path + req.params[0];
  const sql = `SELECT * FROM equation WHERE method = '${path}'`;
  pool.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/getregression/:path*',verifyToken,(req, res) => {
  const {a} = req.query;
  var path = req.params.path + req.params[0];
  console.log("a=",a)
  console.log("path",path);
  const sql = `SELECT * FROM regression WHERE method = '${path}' AND id = '${a}' `;
  pool.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

// // app.get('/getsample/:path*',(req, res) => {
// //   var path = req.params.path + req.params[0];
// //   const bisectionEquations = equations.filter(equation => equation.method === path);
// //   res.send(bisectionEquations);
// // });

app.get('/gettoken/:name',(req,res) =>{
  var name = req.params.name;
  console.log(name)
  var token = jwt.sign({ name }, secretkey);
  res.send(token)
})

function verifyToken(req, res, next) {
  console.log("มา verifly")
  const token =  req.headers.authorization
  console.log("req.headers",req.headers.authorization)
  if (!token) {
    console.log('Access denied. No token provided.')
    return res.status(401).send('Access denied. No token provided.');
  }
  console.log(token);
  try {
    const decoded = jwt.verify(token, secretkey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
    console.log('Invalid token.')
  }
}


app.get('/test/token',verifyToken,(req,res)=>{
  console.log("asd")
  console.log(req.user.name)
  res.send(req.user.name)
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


module.exports = app;
