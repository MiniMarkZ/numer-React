import React from 'react';
import Plot from 'react-plotly.js';

const Plottest = (props) => {
  const data = []
  var tmpdata = {}
  tmpdata = {
    x: [parseInt(props.fx)],
    y: [props.result],
    type : 'scatter',
    mode : 'markers',
    name :  `Y predict`,
    marker: {
      size: 20
    } 
  }
  data.push(tmpdata)
 

  tmpdata = {
    x: props.X,
    y: props.Y,
    type : 'scatter',
    mode : 'markers',
    name :  `Y input` 
  }
  data.push(tmpdata)
  
  tmpdata = {
    x: props.X,
    y: props.predicty,
    type : 'scatter',
    mode : 'markers',
    name :  `Y predict` 
  }
  data.push(tmpdata)

  for(let i = 0 ; i < props.table[0].length-1 ; i++){ 
    var xi = [];
    props.X.map((xVal, index) => xi.push(parseInt(props.table[index][i])));
    console.log(xi)
    tmpdata={
      x: xi,
      y: props.Y,
      type : 'scatter',
      mode : 'markers',
      name :  `line Y${i}` 
    }
    data.push(tmpdata)

  }

  //--------------------------------
  console.log("table 0 ",props.table)
  for(let i = 0 ; i < props.table[0].length-1 ; i++){ 
    var xi = [];
    props.X.map((xVal, index) => xi.push(parseInt(props.table[index][i])));
    console.log(xi)
    tmpdata={
      x: xi,
      y: props.Y,
      type : 'scatter',
      mode : 'lines',
      name :  `line Y${i}` 
    }
    data.push(tmpdata)

  }

  tmpdata = {
    x: props.X,
    y: props.predicty,
    type : 'scatter',
    mode : 'lines',
    name :  `line Predict` 
  }
  data.push(tmpdata)
  
  const layout = {
    title: 'Line and Scatter Regression'
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default Plottest;
