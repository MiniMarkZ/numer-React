import React from 'react';
import Plot from 'react-plotly.js';

const Plottest = (props) => {
  console.log("props",props)
  // console.log("props table",props.table.length)
  // console.log("props table",props.table[0])
  console.log(parseInt(props.fx) , props.result)
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
    y: props.predicty,
    type : 'scatter',
    mode : 'lines',
    name :  `line Predict` 
  }
  data.push(tmpdata)
  
  tmpdata = {
    x: props.X,
    y: props.Y,
    type : 'scatter',
    mode : 'lines',
    name :  `line` 
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
  
    tmpdata = {
      x: props.X,
      y: props.Y,
      type : 'scatter',
      mode : 'markers',
      name :  `Y input` 
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
