const express = require('express');
const port = 8080;
var cors = require('cors')
const app = express();
// const equations = require('./data/equation.json');
app.use(cors())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//--เชื่อ database mysql -- 
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'numer',
  password: "",
});
//---------------------- 

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

app.get('/getregression/:path*', (req, res) => {
  var path = req.params.path + req.params[0];
  console.log(path);
  const sql = `SELECT * FROM regression WHERE method = '${path}'`;
  pool.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
// app.get('/getsample/:path*', (req, res) => {
//   var path = req.params.path + req.params[0];
//   const bisectionEquations = equations.filter(equation => equation.method === path);
//   res.send(bisectionEquations);
// });


app.get('/testswagger', (req, res) => {
    const { a, b, c } = req.query;
    if (a == 112 && b == 44 && c == 'prayut') {
      res.send('tumak');
    } else {
      res.send('lnwza');
    }
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
