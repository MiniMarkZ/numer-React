import React from 'react';
import Plot from 'react-plotly.js';
import { json } from 'react-router-dom';

const Plottest = (props) => {
    console.log("props",props)
    var xtmp = parseInt(props.fx[0])
    console.log("xtmp",xtmp)
    console.log("ytmp")
    var arrayy = []
    props.Y.map((yVal, index) => arrayy.push(props.Y[index][0]));
    console.log("arrayy",arrayy)
  const data = []
  var tmpdata = {}

  tmpdata = {
    x: [xtmp],
    y: [JSON.parse(props.result)],
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
    props.Y.map((yVal, index) => xi.push(props.X[index][i]));
    console.log("xi = ",xi)
    tmpdata={
      x: xi,
      y: arrayy,
      type : 'scatter',
      mode : 'markers',
      name :  `line X${i}` 
    }
    data.push(tmpdata)

  }

  //--------------------------------
  console.log("table 0 ",props.table)
  for(let i = 0 ; i < props.table[0].length-1 ; i++){ 
    var xi = [];
    props.Y.map((yVal, index) => xi.push(props.X[index][i]));
    console.log(xi)
    tmpdata={
      x: xi,
      y: arrayy,
      type : 'scatter',
      mode : 'lines',
      name :  `line Y${i}` 
    }
    data.push(tmpdata)

  }
  var x0 = [];
  props.Y.map((yVal, index) => x0.push(props.X[index][0]));
  console.log("x0",x0)
  tmpdata ={
    x: x0,
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
