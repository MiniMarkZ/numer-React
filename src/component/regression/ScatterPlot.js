import React from 'react';
import Chart from 'react-apexcharts';

const ScatterPlot = (props) => {
  console.log("props",props)
  const pointresult = `[${props.fx},${parseInt(props.result)}]`;
  const arrayResult = JSON.parse("[" + pointresult + "]");
  
  console.log("pp",arrayResult)
  const arrays = [];
  props.X.map((xVal, index) => arrays.push([xVal, props.y[index]]));
  

  console.log(arrays)
  const series = [{
    name: 'X',
    type: 'scatter',
    data: arrays
  }, {
    name: 'Line',
    type: 'line',
    data: [arrays[0], arrays[arrays.length - 1]]
  },{
    name: 'X predict',
    type: 'scatter',
    data: arrayResult
  }];
  const options = {
    chart: {
      height: 350,
      type: 'line',
    },
    fill: {
      type: 'solid',
    },
    markers: {
      size: [8, 0]
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 80,
      tickAmount: 8
    },
  };

  return (
    <div className="scatter">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ScatterPlot;
