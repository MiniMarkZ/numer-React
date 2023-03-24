const express = require('express');
const port = 8080;
var cors = require('cors')
const app = express();
const equations = require('./data/equation.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! this Api numer');
});

app.get('/Bisection', (req, res) => {
    const bisectionEquations = equations.filter(equation => equation.method === 'Bisection');
    res.json(bisectionEquations);
});

app.get('/FalsePosition', (req, res) => {
    const falsePositionEquations = equations.filter(equation => equation.method === 'FalsePosition');
    res.json(falsePositionEquations);
});

app.get('/Onepoint', (req, res) => {
    const OnepointEquations = equations.filter(equation => equation.method === 'Onepoint');
    res.json(OnepointEquations);
});

app.get('/Newtonraphson', (req, res) => {
    const NewtonraphsonEquations = equations.filter(equation => equation.method === 'Newtonraphson');
    res.json(NewtonraphsonEquations);
});

app.get('/Secant', (req, res) => {
    const SecantEquations = equations.filter(equation => equation.method === 'Secant');
    res.json(SecantEquations);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
